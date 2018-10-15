
import React from 'react';
import {renderToString} from 'react-dom/server';

import { getBundles } from 'react-loadable/webpack';
import assets from '../../build/asset-manifest.json';
import Helmet from 'react-helmet';
import {matchPath} from 'react-router-dom';

import { matchRoutes } from 'react-router-config';
import client from '../../src/app/index.js';
import path from 'path';
import fs from 'fs'


let configureStore=client.configureStore;
let createApp=client.createApp;
let routesConfig=client.routesConfig;

// const stats = null;
const createTags=(bundles)=>{
  
  let scriptfiles= [];
  let stylefiles=[];
  for(let bundle in bundles){
    if (bundle.endsWith('.js')) {
      scriptfiles.push(bundles[bundle])
    } else if(bundle.endsWith('.css')) {
      stylefiles.push(bundles[bundle])
    }
  }
  // let bundles = getBundles(stats, modules);
  // let scriptfiles = bundles.filter(bundle => bundle.file.endsWith('.js'));
  // let stylefiles = bundles.filter(bundle => bundle.file.endsWith('.css'));
  let scripts=scriptfiles.map(script=>`<script src="/${script}"></script>`).join('\n');
  let styles=stylefiles.map(style=>`<link href="/${style}" rel="stylesheet"/>`).join('\n');
  return {scripts,styles}
}

const prepHTML=(data,{html,head,rootString,scripts,styles,initState})=>{
  
  data=data.replace('<html',`<html ${html}`);
  data=data.replace('</head>',`${head} \n ${styles}</head>`);
  data=data.replace('<div id="root"></div>',`<div id="root">${rootString}</div>`);
  data=data.replace('<body>',`<body> \n <script>window.__INITIAL_STATE__ =${JSON.stringify(initState)}</script>`);
  data=data.replace('</body>',`${scripts}</body>`);
  return data;
}

const getMatch=(routesArray, url)=>{
  return routesArray.some(router=>{
    
    return matchPath(url,{
    path: router.path,
    exact: router.exact,
  })})
}

const makeup=(ctx,store,history,createApp,html)=>{
  let initState=store.getState();
  
  let modules=assets;

  let rootString= renderToString(createApp({store,history,modules}));

  let {scripts,styles}=createTags(modules)

  const helmet=Helmet.renderStatic();
  let renderedHtml=prepHTML(html,{
    html:helmet.htmlAttributes.toString(),
    head:helmet.title.toString()+helmet.meta.toString()+helmet.link.toString(),
    rootString,
    scripts,
    styles,
    initState
  })
  return renderedHtml;
}


const clientRouter=async(ctx,next)=>{
  // console.log(`\n\n\n------------clientRouter------------${ctx.req.url}--\n\n\n`)
  let isMatch=getMatch(routesConfig,ctx.req.url);
  // console.log('\n\n\n------------clientRouter------isMatch11--------\n\n\n',isMatch,'\n\n\n------------clientRouter------isMatch11--------\n\n\n')
  if(isMatch){
    let html=fs.readFileSync(path.join(path.resolve(__dirname,'../../public'),'index.html'),'utf-8');
    let {store,history}=configureStore(ctx.req.url);
    let branch=matchRoutes(routesConfig,ctx.req.url);   

    let promises = branch.map(({route,match})=>{
      return route.thunk?(route.thunk(store)):Promise.resolve(null)
    });
    await Promise.all(promises).catch(err=>console.log('err:---',err))
    let renderedHtml=await makeup(ctx,store,history,createApp,html);
    ctx.body=renderedHtml
  }
  await next()
}

module.exports = clientRouter;