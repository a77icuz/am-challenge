import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { charactersReducer } from '../reducers/charactersReducer';
import { favoritesReducer } from '../reducers/favoritesReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  characters: charactersReducer,
  favorites: favoritesReducer,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
