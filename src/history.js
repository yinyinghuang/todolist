import createHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

// const history = createHistory();

const history = (url = '/') => {
// Create a history depending on the environment
  return createMemoryHistory({
        initialEntries: [url]
     })
}
export default history;    