import { createStore, applyMiddleware,compose } from "redux";
import rootReducer from "../reducers/index";
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

export default store;