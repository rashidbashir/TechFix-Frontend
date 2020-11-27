import React, { useEffect, useState } from "react";
import Header from '../../components/header'; 
import Footer from '../../components/footer'; 
import { useHistory,useParams } from 'react-router-dom';
import SelectItem from '../../components/selectitem';
 
import "./quotedetailfourth.css";
function QuoteDetailFourth(props) {
  const {devicetypename,classificationname,modelname}=useParams();
  const history = useHistory();
  const [allColors,setColors]=useState("")
    
  // var txt1 = storeData.selectedModelType; 
  // var txt2=storeData.selectedItem;
  // var txt ;
  // if(txt1){txt=txt1; }else{txt=txt2;}; 
  useEffect(() => { 
    console.log(devicetypename);
    console.log(classificationname);
    console.log(modelname);
    fetch("/api/ColorByModel",{
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
      setColors(result.categ.childColors);
    })
  }, [])

  const goNavigation = (item) => {
    history.push(`/Device/${devicetypename}/Classification/${classificationname}/model/${modelname}/color/${item.name}`)
  }

  return (
    <div className='container_body'>
      <div className='body_header'>
        <Header />
      </div>
      <div className='container_custom'>
        <div className='title_container'>
          <h2>Which colour is it? </h2>
        </div>
        <div className='box_containerFourth'>
        <div className='boxesFourth'>
     
       
            {allColors && allColors.map((item, index) => {
              return (
                <div key={index} 
                 //className={storeData.selectedColorType === item  ? style.selecteditem : style.selectitem} 
                 className="col-6 col-sm-4 col-md-3 col-lg-2 selectitemFour"
                 > 
             
                <SelectItem item={item} setItem={goNavigation} key={index}  />
                </div>
              )
            })}  
          
        </div>
        </div>
        <div className="gap"></div>
      </div> 

      <Footer navigation={"fourth"} 
      device={devicetypename}classification={classificationname}model={modelname} color="current"
      value={60}/>
    </div>
  );
}

export default QuoteDetailFourth;
