import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
 

import {Provider} from 'react-redux' ;
import { createStore, applyMiddleware,compose } from "redux";
import rootReducer from "./js/reducers/index";
import ReduxThunk from "redux-thunk";

let composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger=store=>{
    return next=>{
      return action=>{
        console.log("[MiddleWare] dispatching",action);
        const result=next(action);
        return result;
      }
    }
  }
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger,ReduxThunk)));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

 
