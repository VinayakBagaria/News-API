import { combineReducers } from 'redux';

import fetchSourcesReducer from './fetch_sources';
import fetchArticlesReducer from './fetch_articles';

const rootReducer = combineReducers({
  source: fetchSourcesReducer,
  article: fetchArticlesReducer
});

export default rootReducer;
