import React from 'react'
import {Route,Router} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'

import routes from './routes'

const Routers = ({history}) => (
	<Router history={history}>
		{	
			renderRoutes(routes)
		}
	</Router>
)

export default Routers