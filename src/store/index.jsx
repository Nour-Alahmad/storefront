import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CategoriesState } from './categories';
import { productsReducer } from './prodects';
import { cartReducer } from './cart';


let reducers = combineReducers({
    categories: CategoriesState, 
    products: productsReducer,
    cart:cartReducer
});

const store = createStore(reducers, composeWithDevTools());

export default store;
