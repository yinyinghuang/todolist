import React from 'react';
import { Provider } from 'react-redux';
import ConnectedRouter from 'react-router-redux/ConnectedRouter'
import App from '../containers/App'

const createApp = ({store,history}) => (  
    <Provider store={store}>   
        <ConnectedRouter history={history}>
        	<App/>
        </ConnectedRouter>
    </Provider>
)

export default createApp;
