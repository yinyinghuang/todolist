import React from 'react';
import {render} from 'react-dom'

import {Provider,connect} from 'react-redux'
import {createStore,combineReducers,applyMiddleware,bindActionCreators} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import {routerReducer,routerMiddleware,ConnectedRouter,push,replace} from 'react-router-redux'

import Router from 'react-router/Router'
import withRouter from 'react-router/withRouter'
import createBrowserHistory from 'history/createBrowserHistory'
import renderRoutes from 'react-router-config/renderRoutes'

// import User from './components/User'
// import Login from './components/User/Login'
// import Logout from './components/User/Logout'
// import Todo from './components/Todo'
// import Test from './components/Test'

import routes from './router/routes'
import configureStore from './store/configureStore'
import reducers from './store/reducers'
import history from './history'
import createApp from './app/createApp'
// import App from './containers/App'
// const reducers = combineReducers({
// 	router:routerReducer
// })

// const history = createBrowserHistory()
const initialState = window.__INITIAL_STATE__
// const middlewares = [logger,thunk,routerMiddleware(history)]
// const store = createStore(reducers,initialState,applyMiddleware(...middlewares))
// const configureStore = (initialState) => {
//   const middleware = [logger,thunk,routerMiddleware(history)];

//   return createStore(
//     reducers,
//     initialState,
//     /*compose(*/applyMiddleware(...middleware)/*)*/
//   );
// };

const store = configureStore(initialState)


// const User = (props) => {
//   return (
//   	<p>
//   		this is user Component
//     </p>
//   )
// }

// class TestComponent extends React.PureComponent {
// 	handleClick(){
// 		this.props.pushAct('/')
// 		console.log('TestComponent---click')
// 	}
// 	render() {
// 		return (
// 			<div onClick={this.handleClick.bind(this)}>this is Test Component,redirect to index11111111111</div>
// 		);
// 	}
// }

// const mapDispatchToProps = (dispatch) => bindActionCreators({
// 	pushAct:push
// },dispatch)

// const Test = connect(
// 	null,
// 	mapDispatchToProps
// )(TestComponent)



// const Todo = (props) => {
//   return (
//   	<p>
//   		this is Todo Component
//     </p>
//   )
// }

// const routes = [{
// 	path:'/test',
// 	exact:true,
// 	component:Test
// },{
// 	path:'/',
// 	component:User,
//   routes:[{
//     path:'/user/login',
//     component:Login,
//   },{
//     path:'/user/logout',
//     component:Logout,
//   }]
// },{
// 	path:'/todo',
// 	exact:true,
// 	component:Todo
// }]



class AppComponent extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('----------shouldComponentUpdate--nextProps----\n',nextProps)
  //   console.log('----------shouldComponentUpdate--nextState----\n',nextState)
    
  // }
  componentWillUpdate(nextProps, nextState) {
    alert('componentWillUpdate')
  }
  componentDidUpdate(prevProps, prevState) {
    alert('componentDidUpdate')
  }
  componentWillReceiveProps(nextProps) {
    console.log('----------componentWillReceiveProps------\n',nextProps)
  }

  // componentDidMount() {
  //   console.log('\n\n\n-----------App---------\n\n\n',this.props.user)
  //   if(!this.props.user){
  //     this.props.replaceAct('/user/login');
  //   }
  // }
  handleClick(){
    this.props.replaceAct('/test');
  }

  render() {
    return (<div>
      <div>whyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</div>
      <div>{renderRoutes(routes)}</div>
      <div onClick={this.handleClick.bind(this)}>redirect button</div>
    </div>);
  }
}


const mapStateToPropsApp = (state) => ({ 
  user:state.authUser.user  
})

const mapDispatchToPropsApp = (dispatch) => bindActionCreators({
    replaceAct:replace
  },dispatch)


const App = withRouter(connect(
  mapStateToPropsApp,
  mapDispatchToPropsApp,
)(AppComponent))

// const App = () => (<div>{renderRoutes(routes)}</div>)

const renderApp = () => {
  // const createApp = ({store,history}) => {
  //   return (
  //     <Provider store={store}>
  //       <ConnectedRouter history={history}>
  //         <div>{renderRoutes(routes)}</div>
  //       </ConnectedRouter>
  //     </Provider>
  //   )
  // }
  const createApp = ({store,history}) => {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App/>
        </ConnectedRouter>
      </Provider>
    )
  }
  render(createApp({store,history}),document.getElementById('root'))
}



// const renderApp = () => {
//   let application = createApp({store,history});
//   render(application,document.getElementById('root'))
// }
renderApp()

