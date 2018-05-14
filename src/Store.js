import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

// TODO:check how thunk helps here
const configureStore = () =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

export default configureStore;
