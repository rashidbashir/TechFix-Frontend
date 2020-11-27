import React,{useEffect, useState} from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Link,useParams } from 'react-router-dom';
import SelectItem from '../../components/selectitem';
import "./quotedetailfive.css";

import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// import FormControl from '@material-ui/core/FormControl';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';

import Button from '@material-ui/core/Button';

import {connect }from "react-redux";
import * as ActionCreators from "../../js/actions/index";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));
const initialList = [

];

// import Tooltip from '@material-ui/core/Tooltip';


// import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';
// const initialList = [

// ];
// const HtmlTooltip = withStyles((theme) => ({
//   tooltip: {
//     backgroundColor: '#f5f5f9',
//     color: 'rgba(0, 0, 0, 0.87)',
//     maxWidth: 220,
//     fontSize: theme.typography.pxToRem(12),
//     border: '1px solid #dadde9',
//   },
// }))(Tooltip);

function QuoteDetailFive(props) {
  const {devicetypename,classificationname,modelname,colorname}=useParams();

  const [allServiceModel,setServiceOfModel]=useState("");
  const [allServiceClassification,setServiceOfClassification]=useState("");
  const [allServiceDevice,setServiceOfDevice]=useState("");

  const [thisItemIssue,setThisItemIssue]=useState("");

  const [list, setList] = React.useState(initialList);
  
  const [inputData, setinputData] =useState("");

  var newList = [];
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event,item) => {
    setAnchorEl(event.currentTarget);
    setThisItemIssue(item.possibleissues)
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);



  useEffect(() => { 
    console.log(devicetypename);
    console.log(classificationname);
    console.log(modelname);
    console.log(colorname);
    fetch("/api/allServiceOfModel",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:modelname
      })
    }).then((res)=>res.json())
    .then(result=>{
      console.log(result);
      setServiceOfModel(result.categ!==null?result.categ.services:null);
    });
    fetch("/api/allServiceOfClassification",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:classificationname
      })
    }).then((res)=>res.json())
    .then(result=>{
      console.log(result);
      setServiceOfClassification(result.categ!==null?result.categ.services:null);
    });
    fetch("/api/allServiceOfDevice",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:devicetypename
      })
    }).then((res)=>res.json())
    .then(result=>{
      console.log(result);
     setServiceOfDevice(result.categ!==null?result.categ.services:null);
    })
  }, [])

  // var txt1 = storeData.selectedModelType;
  // var txt2 = storeData.selectedItem;
  // var txt;
  // if (txt1 !== "") { txt = txt1; } else { txt = txt2; };


  // const inputsHandler = (e) => {
  //   setinputData({ inputData: e.target.value })
  // }
  // const goNavigation = (clickedItem) => {
  //   var n = list.indexOf(clickedItem);
  //   if (n >= 0) {
  //     newList = list.slice(0, n).concat(list.slice(n + 1, list.length))

  //   } else {
  //     newList = list.concat([clickedItem])
  //   }
  //   setList(newList);
  // }
  // const submitButton = () => {
  //   dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "Issue", selectedIssueType: list } })
  //   dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "Issue", selectedIsuueQzType: inputData } })

  //   history.push('/quotedetailsix')

  // }
  const allInform={
    myInf:{deviceType:devicetypename,
    classification:classificationname,
    model:modelname,
    color:colorname,
    issue:list,
    issueDetail:inputData,
    }
  }
  const submitButton = () => {
    console.log(inputData);
    console.log(list);
    console.log(devicetypename);
    console.log(classificationname);
    console.log(modelname);
    console.log(colorname);
    console.log(allInform);
    props.onselectNext(allInform);
  }


  const goNavigation=(item)=>{
    console.log(item);
    const no=item.name;
    var n = list.indexOf(no);
    if (n >= 0) {
      newList = list.slice(0, n).concat(list.slice(n + 1, list.length))

    } else {
      newList = list.concat([no])
    }
    setList(newList);
  }
  const goNav=(item)=>{
    console.log("extra")
    console.log(item);
    console.log(list)
  }

  return (
    <div className='container_body'>
      <div className='body_header'>
        <Header />
      </div>
      <div className='container_custom'>
        <div className='title_container'>
          <h2><p> Which services do you need?    </p></h2>
          {allServiceModel=="" & allServiceClassification=="" & allServiceDevice==""?null:<h4> <p>   You can select more than one service </p></h4>}
        </div>
        <div className="box_containerFive">
          <div className="boxesFive">

            {/* {storeData.Issue[txt] && Object.keys(storeData.Issue[txt]).map((item, index) => {
              return (
                <div key={index}>
                  <HtmlTooltip placement="right-start"
                    title={
                      <React.Fragment>
                        <Typography color='primary'> <p style={{ color: "red" }}>Possible Issues  </p></Typography>
                        {storeData.IssueTool[item]}
                        {storeData.IssueTool.item}
                        <ul>
                          {storeData.IssueTool[item] && storeData.IssueTool[item].map((condetail, i) => {
                            return <li  key={i} style={{textAlign:'left'}}>  {condetail}</li>
                          })}
                        </ul> 

                      </React.Fragment>
                    } arrow
                  >
                    <div className={storeData.selectedClassificationType === item || list.includes(item) ? style.selecteditem : style.selectitem} >
                      <SelectItem item={item} setItem={goNavigation} key={index} />
                    </div>
                  </HtmlTooltip>
                </div>
              )
            })} */}
                {allServiceModel?allServiceModel.map((item,index)=>{
                   return(
                    <div key={index}id="myMainContainer"className={list.includes(item.name)?"selecteditemFifth":"selectitemFifth"}onClick={()=>goNavigation(item)}>
                    <Typography
                    className="fullPopoverDiv selectitem"
                    key={index}
                      aria-owns={open ? 'mouse-over-popover' : undefined}
                      aria-haspopup="true"
                      onMouseEnter={(e)=>handlePopoverOpen(e,item)}
                      onMouseLeave={handlePopoverClose}
                      // style={{width:"100%",position:"relative",top:"300px",left:"100px"}}
                    >
                     <SelectItem item={item} setItem={goNav} key={index} />
                    </Typography>
                    {thisItemIssue!==""?
                    <Popover
                      // id=.fullPopoverDiv}
                      className={classes.popover}
                      // classes={{
                      //   paper: classes.paper,
                      // }}
                      open={open}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'center',
                        horizontal: 'left',
                      }}
                      onClose={handlePopoverClose}
                      disableRestoreFocus
                    >
                     {/* <div className="popover">
                       <h3 style={{color:"red"}}>Possible Issues</h3> */}
                      <ul className="mypopStyle">
                      <h3 style={{color:"red"}}>Possible Issues</h3>
                      {thisItemIssue? thisItemIssue.map((snglIssue,index)=>{
                        return(
                        <li>{snglIssue}</li>
                        )
                      }):null}
                      </ul>
                      {/* </div>  */}
                    </Popover>:null}
            
                    <div className="row mobileOnly">
                      <div className="col-4">
                      <SelectItem item={item} setItem={goNavigation} key={index} />
                      </div>
                      <div className="col-8"> 
                       <ul className="mobilulist">
                       {item.possibleissues.map((snI,index)=>{
                         return(
                           <li key={index}>{snI}</li>
                         )
                       })}
                       </ul>
                    
                    </div>
                    </div>
                  </div>
                   )
                 }):null} 
                 {allServiceClassification?allServiceClassification.map((item,index)=>{
                   return(
                    <div key={index}id="myMainContainer"className={list.includes(item.name)?"selecteditemFifth":"selectitemFifth"}onClick={()=>goNavigation(item)}>
                    <Typography
                    className="fullPopoverDiv selectitem"
                    key={index}
                      aria-owns={open ? 'mouse-over-popover' : undefined}
                      aria-haspopup="true"
                      onMouseEnter={(e)=>handlePopoverOpen(e,item)}
                      onMouseLeave={handlePopoverClose}
                      // style={{width:"100%",position:"relative",top:"300px",left:"100px"}}
                    >
                     <SelectItem item={item} setItem={goNav} key={index} />
                    </Typography>
                    {thisItemIssue!==""?
                    <Popover
                      // id=.fullPopoverDiv}
                      className={classes.popover}
                      // classes={{
                      //   paper: classes.paper,
                      // }}
                      open={open}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'center',
                        horizontal: 'left',
                      }}
                      onClose={handlePopoverClose}
                      disableRestoreFocus
                    >
                     {/* <div className="popover">
                       <h3 style={{color:"red"}}>Possible Issues</h3> */}
                      <ul className="mypopStyle">
                      <h3 style={{color:"red"}}>Possible Issues</h3>
                      {thisItemIssue? thisItemIssue.map((snglIssue,index)=>{
                        return(
                        <li>{snglIssue}</li>
                        )
                      }):null}
                      </ul>
                      {/* </div>  */}
                    </Popover>:null}
            
                    <div className="row mobileOnly">
                      <div className="col-4">
                      <SelectItem item={item} setItem={goNavigation} key={index} />
                      </div>
                      <div className="col-8"> 
                       <ul className="mobilulist">
                       {item.possibleissues.map((snI,index)=>{
                         return(
                           <li key={index}>{snI}</li>
                         )
                       })}
                       </ul>
                    
                    </div>
                    </div>
                  </div>
                   )
                 }):null}   
                 {allServiceDevice?allServiceDevice.map((item,index)=>{
                   return(
                      <div key={index} id="myMainContainer"className={list.includes(item.name)?"selecteditemFifth":"selectitemFifth"}onClick={()=>goNavigation(item)}>
                <Typography
                className="fullPopoverDiv"
                key={index}
                  aria-owns={open ? 'mouse-over-popover' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(e)=>handlePopoverOpen(e,item)}
                  onMouseLeave={handlePopoverClose}
                  // style={{width:"100%",position:"relative",top:"300px",left:"100px"}}
                >
                <SelectItem item={item} setItem={goNav} key={index} />
                </Typography>
                {thisItemIssue!==""?
                        <Popover
                          id="fullPopoverDiv"
                          className={classes.popover}
                          // classes={{
                          //   paper: classes.paper,
                          // }}
                          open={open}
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'center',
                            horizontal: 'left',
                          }}
                          onClose={handlePopoverClose}
                          disableRestoreFocus
                        >
                          {/* <div className="popover">
                       <h3 style={{color:"red"}}>Possible Issues</h3> */}
                      <ul className="mypopStyle">
                      <h3 style={{color:"red"}}>Possible Issues</h3>
                      {thisItemIssue? thisItemIssue.map((snglIssue,index)=>{
                        return(
                        <li>{snglIssue}</li>
                        )
                      }):null}
                      </ul>
                      {/* </div>  */}
                        </Popover>:null}
                        <div className="row mobileOnly">
                      <div className="col-4">
                      <SelectItem item={item} setItem={goNavigation} key={index} />
                      </div>
                      <div className="col-8"> 
                       <ul className="mobilulist">
                       {item.possibleissues.map((snI,index)=>{
                         return(
                           <li key={index}>{snI}</li>
                         )
                       })}
                       </ul>
                    
                    </div>
                    </div>
                     </div>
                   )
                 }):null}   
          </div> 




          {/* <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        style={{width:"100%",position:"relative",top:"300px",left:"100px"}}
      >
        Hover with a Popover.
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>I use Popover.</Typography>
      </Popover>
    </div> */}
           <div className="nextPara">
            <p>Would you like to add anything?</p>

            <form className={classes.root}style={{width:"330px"}} id="inputAdditional" noValidate autoComplete="off">
      <TextField id="standard-basic"value={inputData} className="inputAdditional"label="Any Additional Info"onChange={(e)=>setinputData(e.target.value)} />
      
    </form>
    {/* <FormControl style={{width:"330px"}} className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              
            </InputAdornment>
          }
        />
      </FormControl> */}
            {/* <input type="text" name="Qz" className="form-control" placeholder=" " onChange={inputsHandler} />

            <div style={{ height: 10 }}></div> */}
      <div  className="nxtbtn">
      <Link to="/details"allinform={allInform}><Button onClick={submitButton} variant="contained"style={{width:"200px",borderRadius:"30px"}} color="secondary">
        Next
      </Button></Link>
      </div>
          </div>
        </div>
        <div className="gap"></div>
        <div className="gap"></div><div className="gap"></div>
      </div>
            <div className="footer">
      <Footer className="footer" navigation={"five"} device={devicetypename}classification={classificationname}model={modelname} color={colorname}issue="current"value={70} />
      </div>
    </div>
  );
}
const mapStateToProps=(State)=>{
  return{

  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
     onselectNext:(all)=>dispatch(ActionCreators.createfullInformation(all)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(QuoteDetailFive);
