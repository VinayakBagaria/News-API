import { combineReducers } from 'redux';

import fetchSourcesReducer from './fetch_sources';

const rootReducer = combineReducers({
  source: fetchSourcesReducer
});

export default rootReducer;
