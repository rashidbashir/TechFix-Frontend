import React, { useEffect } from "react"; 
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import CheckIcon from '@material-ui/icons/Check';
import {
    Table,
    TableHead,
    TableCell, 
    TableRow
} from "@material-ui/core";
export default function AlertDialog(props) {
    // const storeData = useSelector(store => store);
    const [open, setOpen] = React.useState(false);
  useEffect(()=>{
    console.log('From Modal...####......');
    console.log(props.device);
    console.log('From Modal...####......');
    console.log(props.classification);
    console.log('From Modal...####......');
    console.log(props.model);
    console.log('From Modal...####......');
    console.log(props.color);
    console.log(props.issue);
    console.log(props.details);
  })
    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
    const history = useHistory()

    // const now = props.value;
    // var txt1, txt2, txt3, txt4, txt5, txt6;
   
    //   txt1 = storeData.selectedDeviceType;
    
   
    //   txt2 = storeData.selectedClassificationType;
   
    //   txt3 = storeData.selectedModelType;
   
    //   txt4 = storeData.selectedColorType;
   
    //   txt5 = storeData.selectedIssueType;
    //     txt6 = storeData.selectedDetailsType.fullname;
    

    // const goBackNavigation = (item) => {

    //     if (item === "first") {  
    //         history.push("/quotedetailfirst")
    //       }
    //       else if (item === "second") {
    //         if (storeData.selectedClassificationType !== "") {
    //           history.push("/quotedetailsecond")
      
    //         }
      
    //       }
    //       else if (item === "third") {
    //         if (storeData.selectedModelType !== "") {
    //           history.push("/quotedetailthird") 
    //         }
           
    //       }
    //       else if (item === "fourth") {
    //         if (storeData.selectedColorType !== "") {
    //           history.push("/quotedetailfourth")
    //         } 
    //       }
    //       else if (item === "five") {
    //         if (storeData.selectedIssueType !== "") {
    //           history.push("/quotedetailfive")
    //         }  
    //       }
    //       else if (item === "six") {
    //         // history.push("/quotedetailsix")
    //       }
    //   } 
      const goto=(place)=>{
        history.push(place);
      }
    
    
    return (
        <div>
            {props.details!=="current"& props.details!==0 &props.details!==undefined?<p>SuccessFully Sent</p>:
            <p variant="outlined" color="primary"style={{cursor:"pointer"}} onClick={handleClickOpen}>
                Currently Selecting Group
                <h5 style={{color:"red"}}>
                  {props.device==="current"?"Device Type":null}
                  {props.classification==="current"?"Classification":null}
                  {props.model==="current"?"Model":null}
                  {props.color==="current"?"Color":null}
                  {props.issue==="current"?"Issue":null}
                  {props.details==="current"?"Details":null}
                </h5>
           </p>}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth='lg'
            >
                <DialogTitle id="alert-dialog-title">
                    To change any of the below info just tap on it
                </DialogTitle>
                <DialogContent >
                    <div className="w-100 overflow-auto">
                        <Table style={{ whiteSpace: "pre" }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="px-0" > 
                                    {props.device==="0"||props.device===undefined?
                                      <p style={{color:"grey"}}>Device Type</p>:
                                      (props.device==="current"?<p style={{color:"red"}}>Device Type</p>:
                                      <p 
                                      onClick={()=>goto(`/`)}
                                      style={{cursor:"pointer",color:"green"}}>Device Type <CheckIcon style={{color:"green"}} /></p>)
                                      }
                                    </TableCell>
                                    <TableCell className="px-0" > 
                                    {props.device==="0"||props.device===undefined?
                  null:
                  (props.device==="current"?<img src="/img/lazyLoader.gif" className="loading" alt="progress" />:
                  <p 
                  onClick={()=>goto(`/`)}
                  style={{cursor:"pointer"}}>{props.device}</p>)
                  }
                                      </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0"> 
                                    {props.classification==="0"||props.classification===undefined?
                                    <p style={{color:"grey"}}>Classification</p>:
                                      (props.classification==="current"?<p style={{color:"red"}}>Classification</p>:
                                      <p 
                                      onClick={()=>goto(`/Device/${props.device}`)}
                                      style={{cursor:"pointer",color:"green"}}>Classification <CheckIcon style={{color:"green"}} /></p>)
                                      }
                                     </TableCell>
                              
                                    <TableCell className="px-0" > 
                                    {props.classification==="0"||props.classification===undefined?
                null:
                (props.classification==="current"?<img src="/img/lazyLoader.gif"alt="loader" className="loading" ng-hide="progress.text != 0" />:
                <p 
                onClick={()=>goto(`/Device/${props.device}`)}
                style={{cursor:"pointer"}}>{props.classification}</p>)
                  }
                                       </TableCell>

                                  </TableRow>
                                <TableRow>
                                    <TableCell className="px-0"> 
                                    {props.model==="0"||props.model===undefined?
                <p style={{color:"grey"}}>Model</p>:
                  (props.model==="current"?<p style={{color:"red"}}>Model</p>:
                  <p 
                  onClick={()=>goto(`/Device/${props.device}/Classification/${props.classification}`)}
                  style={{cursor:"pointer",color:"green"}}>Model <CheckIcon style={{color:"green"}} /></p>)
                  }
                                     </TableCell>
                                    <TableCell className="px-0" >  
                                    {props.model==="0"||props.model===undefined?
                null:
                  (props.model==="current"?<img src="/img/lazyLoader.gif"alt="loader" className="loading" ng-hide="progress.text != 0" />:
                  <p 
                  onClick={()=>goto(`/Device/${props.device}/Classification/${props.classification}`)}
                  style={{cursor:"pointer"}}>{props.model}</p>)
                  }
                                     </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0">  
                                    {props.color==="0"||props.color===undefined?
                <p style={{color:"grey"}}>Color</p>:
                  (props.color==="current"?<p style={{color:"red"}}>Color</p>:
                  <p 
                  onClick={()=>goto(`/Device/${props.device}/Classification/${props.classification}/model/${props.model}`)}
                  style={{cursor:"pointer",color:"green"}}>Color <CheckIcon style={{color:"green"}} /></p>)
                  }
                                    </TableCell>  
                                     <TableCell className="px-0" >  
                                     {props.color==="0"||props.color===undefined?
                null:
                (props.color==="current"?<img src="/img/lazyLoader.gif" alt="loader"className="loading" ng-hide="progress.text != 0" />:
                <p 
                onClick={()=>goto(`/Device/${props.device}/Classification/${props.classification}/model/${props.model}`)}
                style={{cursor:"pointer"}}>{props.color}</p>)
                  }
                                       </TableCell>
                                </TableRow>
                             
                                <TableRow>
                                    <TableCell className="px-0"> 
                                    {props.issue==="0"||props.issue===undefined?
                <p style={{color:"grey"}}>Issue</p>:
                  (props.issue==="current"?<p style={{color:"red"}}>Issue</p>:
                  <p 
                  onClick={()=>goto(`/Device/${props.device}/Classification/${props.classification}/model/${props.model}/color/${props.color}`)}
                  style={{cursor:"pointer",color:"green"}}>Issue <CheckIcon style={{color:"green"}} /></p>)
                  }
                                     </TableCell>
                                    <TableCell className="px-0" >  
                                    {props.issue==="0"||props.issue===undefined?
                null:
                (props.issue==="current"?<img src="/img/lazyLoader.gif" alt="load"className="loading" ng-hide="progress.text != 0" />:
                <p 
                onClick={()=>goto(`/Device/${props.device}/Classification/${props.classification}/model/${props.model}/color/${props.color}`)}
                style={{cursor:"pointer"}}>{props.issue}</p>)
                  }
                                      </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0"> 
                                    {props.details==="0"||props.details===undefined?
                <p style={{color:"grey"}}>Details</p>:
                  (props.details==="current"?<p style={{color:"red"}}>Details</p>:<p style={{cursor:"pointer",color:"blue"}}>Details <CheckIcon style={{color:"green"}} /></p>)
                  }
                                     </TableCell>
                                    <TableCell className="px-0" >   
                                    {props.details==="0"||props.details===undefined?
                null:
                                    (props.details==="current"?<img src="img/lazyLoader.gif"alt="lod" className="loading" ng-hide="progress.text != 0" /> :<p style={{cursor:"pointer",color:"blue"}}>{props.details}</p>)
                  } 
                                    </TableCell>
                                </TableRow>
                                
                            </TableHead>
                        </Table>
                    </div>

                </DialogContent>

            </Dialog>
        </div>
    );
}
