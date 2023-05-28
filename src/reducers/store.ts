
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { studentReducer } from './studentReducer'
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
    studentReducer: studentReducer,
    userReducer: userReducer
});

// const store = createStore(
//     rootReducer, 
//     {}, 
//     (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
// );

const store = createStore(
    rootReducer, 
    applyMiddleware(thunk)
);
export default store
export type RootState = ReturnType<typeof rootReducer>


