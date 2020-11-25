import * as ActionTypes from "../constants/action-types";

// export function addArticle(payload) {
//   return { type: ADD_ARTICLE, payload };
// }
export const createfullInformation=(details)=>{
  console.log(details.myInf);
  return (dispatch)=>{
    dispatch(createfullInformSuccess(details.myInf));
    
  }
}
const createfullInformSuccess=(details)=>{
  console.log(details);
  return{
    type:ActionTypes.SET_SELECTED_DEVICE_TYPE,
    details
  }
}
export const createClientDetails=(details)=>{
  console.log(details.clientInfo);
  return (dispatch)=>{
    dispatch(createClientInformSuccess(details.clientInfo));
    
  }
}
const createClientInformSuccess=(details)=>{
  console.log(details);
  return{
    type:ActionTypes.SET_SELECTED_CIENT_DETAILS,
    clientdetails:details
  }
}