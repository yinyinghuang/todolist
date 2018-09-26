import React from 'react'
import {renderRoutes} from 'react-router-config'
import {ConnectedRouter} from 'react-router-redux'

import routesConfig from './routes'

const Routers = ({history}) => (
	<ConnectedRouter history={history}>
		<div>
		{	
			renderRoutes(routesConfig)
		}
		</div>
	</ConnectedRouter>
)

export default Routers