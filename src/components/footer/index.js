import React, { useEffect, useState } from "react";
// import { ProgressBar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import AlertDialog from './modal'
// import { useDispatch } from 'react-redux'

import CheckIcon from '@material-ui/icons/Check';

import { withStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinearProgress from '@material-ui/core/LinearProgress';
import Gradient from "javascript-color-gradient";

import "./footer.css";

const colorGradient = new Gradient();
 
const color1 = "#e85323";
const color2 = "#ec379b";
const color3 = "#00ffe2";

 
colorGradient.setMidpoint(20);
 
colorGradient.setGradient(color1, color2, color3);


const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
     backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    
  },
  bar: {
    borderRadius: 5,
     backgroundColor: '#e83e07',
    // backgroundColor: colorGradient
  },
}))(LinearProgress);



function Footer(props) {
  const history = useHistory()
  // const storeData = useSelector(store => store);

  const [show,setshow]=useState(false);

  // const [state, setState] = useState({
  //   disable: false
  // })
useEffect(()=>{
  console.log(props.device);
  console.log(props.classification);
  console.log(props.model);
  console.log(props.color);
  console.log(props.issue);
  console.log(props.details);
})
const now = props.value;
  //const dispatch = useDispatch();
  // const goBackNavigation = (item) => {

  //   if (item === "first") {

  //     dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedClassificationType: "" } })
  //     dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedModelType: "" } })
  //     dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedColorType: "" } })
  //     dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedIssueType: "" } })
  //     dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedDetailsType: "" } }) 
      
  //     dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedIsuueQzType: "" } })

  //     history.push("/quotedetailfirst")
  //   }
  //   else if (item === "second") {
  //     if (storeData.selectedClassificationType !== "") {
  //       history.push("/quotedetailsecond")

  //     }

  //   }
  //   else if (item === "third") {
  //     if (storeData.selectedModelType !== "") {
  //       history.push("/quotedetailthird") 
  //     }
     
  //   }
  //   else if (item === "fourth") {
  //     if (storeData.selectedColorType !== "") {
  //       history.push("/quotedetailfourth")
  //     } 
  //   }
  //   else if (item === "five") {
  //     if (storeData.selectedIssueType !== "") {
  //       history.push("/quotedetailfive")
  //     }  
  //   }
  //   else if (item === "six") {
  //     // history.push("/quotedetailsix")
  //   }
  // }

  // 
  // var co1, co2, co3, co4, co5, co6, co7;
  // var txt1, txt2, txt3, txt4, txt5;
  // if (now >= 40) {
  //   co1 = "green"; co2 = "red";
  //   txt1 = storeData.selectedDeviceType;
  // }
  // if (now >= 50) {
  //   co1 = "green"; co2 = "green"; co3 = "red";
  //   txt2 = storeData.selectedClassificationType;
  // }
  // if (now >= 60) {
  //   co1 = "green"; co2 = "green"; co3 = "green"; co4 = "red";
  //   txt3 = storeData.selectedModelType;
  // }
  // if (now >= 70) {
  //   co1 = "green"; co2 = "green"; co3 = "green"; co4 = "green"; co5 = "red";
  //   txt4 = storeData.selectedColorType;
  // }

  // if (now >= 80) {
  //   co1 = "green"; co2 = "green"; co3 = "green"; co4 = "green"; co5 = "green"; co6 = "red";
  //   txt5 = storeData.selectedIssueType;
  // }

  // if (now >= 90) {
  //   co1 = "green"; co2 = "green"; co3 = "green"; co4 = "green"; co5 = "green"; co6 = "green"; co7 = "red";
    
  // }

  const toggle = () => {
    setshow(!show);
  }
  const goto=(place)=>{
    history.push(place);
  }

  return (

    < div className={show?"fetchUp":"fetchDown"}>


      <div className={`footer`}>
        <div className="viewbutton" onClick={toggle}><p className="doneper"><span>{now}</span>% Complete{show?<ExpandMoreIcon/>:<ExpandLessIcon/>}</p></div>
        <div className="footer_progress-bar">
        <BorderLinearProgress variant="determinate" value={now} />
          {/* <ProgressBar style={{ width: "100%",height:"50px",color:"red" }} striped variant="red" animated now={now} label={`${now}%`} /> */}
        </div>
        <div className="desktop">
          <div className="footer_button">
            <div style={{ display: "flex" }} >
              <div>
                <div>
                  {props.device==="0"||props.device===undefined?
                  <p style={{color:"grey"}}>Device Type</p>:
                  (props.device==="current"?<p style={{color:"red"}}>Device Type</p>:
                  <p 
                  onClick={()=>goto("/")}
                  style={{cursor:"pointer",color:"green"}}>Device Type <CheckIcon style={{color:"green"}} /></p>)
                  }
                </div>
                <div>
                  {props.device==="0"||props.device===undefined?
                  null:
                  (props.device==="current"?<img src="/img/lazyLoader.gif" className="loading" alt="progress" />:
                  <p 
                  onClick={()=>goto("/")}
                  style={{cursor:"pointer"}}>{props.device}</p>)
                  }
                  {/* <img src="img/lazyLoader.gif" className="loading" alt="progress" /> */}
                </div>
              </div>
            </div>
            <div style={{ display: "flex"}} >
              <div>
                <div>
                {props.classification==="0"||props.classification===undefined?
                <p style={{color:"grey"}}>Classification</p>:
                  (props.classification==="current"?<p style={{color:"red"}}>Classification</p>:
                  <p 
                  onClick={()=>goto(`/Device/${props.device}/`)}
                  style={{cursor:"pointer",color:"green"}}>Classification <CheckIcon style={{color:"green"}} /></p>)
                  }
                </div>
                <div>
                {props.classification==="0"||props.classification===undefined?
                null:
                (props.classification==="current"?<img src="/img/lazyLoader.gif"alt="loadin" className="loading" ng-hide="progress.text != 0" />:
                <p 
                onClick={()=>goto(`/Device/${props.device}/`)}
                style={{cursor:"pointer"}}>{props.classification}</p>)
                  }
                  {/* <img src="img/lazyLoader.gif" className="loading" ng-hide="progress.text != 0" /> */}
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }} >
              <div>
                <div>
                {props.model==="0"||props.model===undefined?
                <p style={{color:"grey"}}>Model</p>:
                  (props.model==="current"?<p style={{color:"red"}}>Model</p>:
                  <p 
                  onClick={()=>goto(`/Device/${props.device}/Classification/${props.classification}`)}
                  style={{cursor:"pointer",color:"green"}}>Model <CheckIcon style={{color:"green"}} /></p>)
                  }
                </div>
                <div>
                  {props.model==="0"||props.model===undefined?
                null:
                  (props.model==="current"?<img src="/img/lazyLoader.gif"alt="loadin" className="loading" ng-hide="progress.text != 0" />:
                  <p
                   onClick={()=>goto(`/Device/${props.device}/Classification/${props.classification}`)}
                   style={{cursor:"pointer"}}>{props.model}</p>)
                  }
                  {/* <img src="img/lazyLoader.gif" className="loading" ng-hide="progress.text != 0" /> */}
                </div>
              </div>
            </div>
            <div style={{ display: "flex"}} >
              <div>
                <div>
                {props.color==="0"||props.color===undefined?
                <p style={{color:"grey"}}>Color</p>:
                  (props.color==="current"?<p style={{color:"red"}}>Color</p>:
                  <p 
                  onClick={()=>goto(`/Device/${props.device}/Classification/${props.classification}/model/${props.model}`)}
                  style={{cursor:"pointer",color:"green"}}>Color <CheckIcon style={{color:"green"}} /></p>)
                  }
                </div>
                <div>
                {props.color==="0"||props.color===undefined?
                null:
                (props.color==="current"?<img src="/img/lazyLoader.gif" className="loading" alt="loadin"ng-hide="progress.text != 0" />:
                <p 
                onClick={()=>goto(`/Device/${props.device}/Classification/${props.classification}/model/${props.model}`)}
                style={{cursor:"pointer"}}>{props.color}</p>)
                  }
                  {/* <img src="img/lazyLoader.gif" className="loading" ng-hide="progress.text != 0" /> */}
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }} >
              <div>
                <div>
                {props.issue==="0"||props.issue===undefined?
                <p style={{color:"grey"}}>Issue</p>:
                  (props.issue==="current"?<p style={{color:"red"}}>Issue</p>:
                  <p 
                  onClick={()=>goto(`/Device/${props.device}/Classification/${props.classification}/model/${props.model}/color/${props.color}`)}
                  style={{cursor:"pointer",color:"green"}}>Issue <CheckIcon style={{color:"green"}} /></p>)
                  }
                </div>
                <div>
                {props.issue==="0"||props.issue===undefined||props.issue.length===0?
                null:
                (props.issue==="current"?<img src="/img/lazyLoader.gif"alt="loadin" className="loading" ng-hide="progress.text != 0" />:
                <p 
                onClick={()=>goto(`/Device/${props.device}/Classification/${props.classification}/model/${props.model}/color/${props.color}`)}
                style={{cursor:"pointer"}}>{props.issue[0].split(" ")[0]}...</p>)
                  }
                  {/* <img src="img/lazyLoader.gif" className="loading" ng-hide="progress.text != 0" /> */}
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }} >
              <div>
                <div>
                {props.details==="0"||props.details===undefined?
                <p style={{color:"grey"}}>Details</p>:
                  (props.details==="current"?<p style={{color:"red"}}>Details</p>:<p style={{cursor:"pointer",color:"green"}}>Details <CheckIcon style={{color:"green"}} /></p>)
                  }
                </div>
                <div>
                {props.details==="0"||props.details===undefined?
                null:
                (props.details==="current"?<img src="img/lazyLoader.gif"alt="loadin" className="loading" ng-hide="progress.text != 0" /> :<p style={{cursor:"pointer"}}>{props.details}</p>)
                  }
                  {/* <img src="img/lazyLoader.gif" className="loading" ng-hide="progress.text != 0" /> */}
                </div>
              </div>
            </div>
            

          </div>


        </div>
        <div className="footer_button1"  > 
          <div className="prog_Left col-4"   >
          <p className="doneper"><span>{now}</span>% Complete</p>
          </div>
          <div className="prog_Right col-8" >
            <AlertDialog  now={now} 
            device={props.device}classification={props.classification}model={props.model} color={props.color}issue={props.issue}details={props.details}
            style={{ display: 'flex' }} />
          </div>
        </div>
      </div >

    </div>
  );
}

export default Footer;