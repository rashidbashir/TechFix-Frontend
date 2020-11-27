import React, { useEffect, useState } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Redirect, useHistory } from 'react-router-dom';
import {connect }from "react-redux";

import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';

import * as ActionCreators from "../../js/actions/index";
import "./six.css";

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

function QuoteDetailSix(props) {
  const [name,setName]=useState("");
  // const [mobileno,setMobileNo]=useState("");
  const [email,setEmail]=useState("");

  const [value, setValue] = useState("")

  const [inqStart,setInqStart]=useState(false);

  const history = useHistory()
  useEffect(()=>{
    console.log(props.allinform);
  },[]);

    
    const seperator=email.lastIndexOf(".");
    let splitedEmail1=email.substring(0,seperator);
    let splitedEmail2=email.substring(seperator+1);


  useEffect(() => {
    console.log(props.fullDetails);
  }, [])
  const clientDetails={
    email,
    phone:value,
    fullname:name
  }
  const sendInquary=()=>{
    setInqStart(true);
    fetch("/api/sendmail",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        diviceType:props.fullDetails.deviceType,
        classification:props.fullDetails.classification,
        model:props.fullDetails.model,
        color:props.fullDetails.color,
        issue:props.fullDetails.issue,
        inquaryInput:props.fullDetails.issueDetail,
        clientDetails:clientDetails
      })
      
    }).then(res=>res.json())
    .then(result=>{
      console.log(result);
      if(result.send===true){
        props.oncreateClient({clientInfo:clientDetails})
        history.push("/thankyou");
      }else{
        // SetInqFail(true);
      }
      
    })
    .catch(err=>{
      console.log(err);
      console.log("Check your details");
    })
  }
  const check=()=>{
    console.log(value);
    console.log(value.length);
  }
 
  return (
    <>
    {props.fullDetails?
    (props.fullDetails.length!==0?<div className='container_body'>
      <div className='body_header'>
        <Header />
      </div>
      
      <div className='container_custom'>
        <div className='title_container'>

          <h2><p> We got your back   </p></h2>
          <h4> <p>  just need a few details of yours</p></h4>
        </div>
        {/* {error?<Alert severity="error"className="alertBox">Please Add Your email Address</Alert>:null}
        {emailError?<Alert severity="error"className="alertBox">Enter your Valid email Address</Alert>:null}
      <div className="querytxt">

        <input type="text" name="phone" className="form-control" placeholder="phone(e.g : 1234567890)" onChange={inputsHandler} value={inputField.phone} />
       <div style={{height:10}}></div>
        <input type="text" name="fullname" className="form-control" placeholder="Full Name" onChange={inputsHandler} value={inputField.fullname}  />
        <div style={{height:10}}></div>
        <input onClick={()=>reset()}type="text" name="email" className="form-control" placeholder="Enter email" onChange={inputsHandler} value={inputField.email}  />
        <div style={{height:10}}></div>
        <p className="btn btn-danger" onClick={submitButton}>Send Inquiry</p>

      </div>  */}
      <div className="allInputs">
       <div className="oneInput">
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircleOutlinedIcon fontSize="large"className="iconsStyle"/>
          </Grid>
          <Grid item>
            <TextField 
            id="input-with-icon-grid" 
            label="Name"style={{ width:'270px' }}
            onChange={(e)=>setName(e.target.value)}
             />
          </Grid>
          <Grid item>
            {name.length>0?<CheckIcon style={{color:"green"}}/>:<CancelIcon style={{color:"red"}}/>}
          </Grid>
        </Grid>
      </div>
      
      <div className="oneInput">
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <DraftsOutlinedIcon fontSize="large"className="iconsStyle"/>
          </Grid>
          <Grid item>
            <TextField 
            id="input-with-icon-grid" 
            label="Email"fontSize="large"
            style={{ width:'270px' }} 
            onChange={(e)=>setEmail(e.target.value)}
            />
          </Grid>
          <Grid item>
            {email.includes(".")?(splitedEmail1.includes("@") & splitedEmail2.length>=2?<CheckIcon style={{color:"green"}}/>:<CancelIcon style={{color:"red"}}/>):<CancelIcon style={{color:"red"}}/>}
          </Grid>
        </Grid>
      </div>
      <div className="oneInput">
        <Grid container spacing={1} alignItems="flex-end">
          
          <Grid item>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                style={{ width:'325px' }} 
                onChange={setValue}/>
          </Grid>
      
        </Grid>
      </div>
      </div>
      <div>
        {inqStart==false?name.length>0 & email.includes(".")?(splitedEmail1.includes("@") & 
        splitedEmail2.length>=2?<Button className="col-10 col-md-4" variant="contained" color="primary"onClick={()=>sendInquary()}>
        Send Inquary
      </Button>:<Button variant="contained" disabled>
        Can't Send
      </Button>):<Button variant="contained" disabled>
        Can't Send
      </Button>:<Button variant="contained" disabled>
        Sending Inquary
      </Button>}
      </div>


      {/* <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
      <button onClick={()=>check()}>Check</button> */}


       {/* <form className={classes.root} noValidate autoComplete="off">
         <PhoneOutlinedIcon/><p>Phone No.</p>
      <TextField
      error
          id="standard-number"
          
          type="number"
          
        />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
         <DraftsOutlinedIcon/><p>Email</p>
      <TextField
      error
          id="standard-basic"
          
          type="email"
          
        />
      </form> */}
      <div className="gap"></div>
      </div>
      <Footer navigation={"six"}
      device={props.fullDetails.deviceType}classification={props.fullDetails.classification}model={props.fullDetails.model} color={props.fullDetails.color}issue={props.fullDetails.issue}details="current"
      
      value={80} />
    </div>:<Redirect to="/"/>):null
     } 
    </>
  );
}
const mapStateToProps=(State)=>{
  return{
    fullDetails:State.productdetails
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    oncreateClient:(data)=>dispatch(ActionCreators.createClientDetails(data)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(QuoteDetailSix);
