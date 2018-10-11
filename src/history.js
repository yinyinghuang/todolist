import createMemoryHistory from 'history/createMemoryHistory';
import createBrowserHistory from 'history/createBrowserHistory';

// const history = createMemoryHistory({initialEntries:['/test']})
const history = (() => {
	console.log('------------------------history\n\n',process.env.NODE_ENV);
	switch (process.env.NODE_ENV){
		case 'production':
			return createMemoryHistory()
		default :
			return createBrowserHistory()
	}
})()


export default history;