import createMemoryHistory from 'history/createMemoryHistory';
import createBrowserHistory from 'history/createBrowserHistory';

// const history = createMemoryHistory({initialEntries:['/test']})
const history = createBrowserHistory()

export default history;