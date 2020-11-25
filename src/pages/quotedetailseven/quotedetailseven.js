import React from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import {Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {connect}from "react-redux";

import "./quotedetailseven.css";
function QuoteDetailSeven(props) {
  
  // const history = useHistory()
  
  // const OKHandler=()=>{
  //   console.log("OK Button click Done");
  // }
  // const gotoHome=()=>{
  //   history.push("/");
  // }
  // const gotoBack=()=>{
  //   history.push("/quotedetailsix");
  // }
  
  return (
    <>
    {props.fullDetails?
    (props.fullDetails.length!==0?
    <div className='container_body'>
      <div className='body_header'>
        <Header />
      </div>
      <div className='container_custom'>
        <div className='title_container'>

            <h1> Thank You  </h1>
            <h3>You are Awesome</h3>
            <h3>One of our Expert will contact you shortly</h3>
          </div>
          <a href="/"><Button className="col-10 col-md-4" variant="contained" color="primary">
        Close
      </Button></a>
        </div>
        <div>
        
      </div>
      <Footer navigation={"seven"}
      device={props.fullDetails.deviceType}classification={props.fullDetails.classification}model={props.fullDetails.model} color={props.fullDetails.color}issue={props.fullDetails.issue}details={props.clientDetails.fullname}
      
      value={100} />
    </div>
    :<Redirect to="/"/>):null
  } 
  </>
  );
}
const mapStateToProps=(State)=>{
  return{
    fullDetails:State.productdetails,
    clientDetails:State.clientdetails
  }
}


export default connect(mapStateToProps)(QuoteDetailSeven);
