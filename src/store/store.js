
import { createStore } from 'redux';
//import reducer from '../Reducers/Reducer';
import itemReducer from '../Reducers/ItemReducer';
/*const store = createStore(reducer, {name: 'Bharghava', items: []}, 
                                 window.__REDUX_DEVTOOLS_EXTENSION__ && 
                                 window.__REDUX_DEVTOOLS_EXTENSION__());*/
//let rootReducer = combineReducers({reducer: reducer, itemReducer: itemReducer});

const store = createStore(itemReducer,
                             { name: 'Bharghava' , items: [ {id:'100', name:'iphone', editMode: 'N'} ] }, 
                             window.__REDUX_DEVTOOLS_EXTENSION__ && 
                             window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;