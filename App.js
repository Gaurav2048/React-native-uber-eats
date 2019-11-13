import React from "react";
import {Text} from "react-native"; 
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware  from "redux-promise";
import Reducer from './Reducers/AuthReducer'; 
import Route from "./Components/Route";


const createStoreWithMiddleWare = applyMiddleware(promiseMiddleware)(createStore); 

export default function App(){
  return(
    <Provider store = {createStoreWithMiddleWare(Reducer)}>
      <Route/>
    </Provider>
  )
}
