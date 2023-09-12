import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CategoriesState } from './categories';
import { productsReducer } from './prodects';


let reducers = combineReducers({
    categories: CategoriesState, 
    products: productsReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
