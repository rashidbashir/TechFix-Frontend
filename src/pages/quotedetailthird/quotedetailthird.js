import React, { useEffect, useState } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useHistory,useParams } from 'react-router-dom';
import SelectItem from '../../components/selectitem';

import  "./quotedetailthird.css";

function QuoteDetailthird(props) {
  const {devicetypename,classificationname}=useParams();
  const [allModels,setModels]=useState("")
  const history = useHistory();

  
  // var txt1 = storeData.selectedClassificationType;
  // var txt2 = storeData.selectedItem;
  // var txt;

  // if (txt1 ==="") { txt = txt2; } else { txt = txt1; };

  useEffect(() => {
    console.log(devicetypename);
    console.log(classificationname);
    fetch("/ModelByClassification",{
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
      setModels(result.categ.subModels);
    })
  }, []);

  const goNavigation = (item) => {
    if(item.childColors.length!==0){
      history.push(`/Device/${devicetypename}/Classification/${classificationname}/model/${item.name}`)
    }else{
      history.push(`/Device/${devicetypename}/Classification/${classificationname}/model/${item.name}/color/0`)
    }
   
  }

  return (
    <div className='container_body'>
      <div className='body_header'>
        <Header />
      </div>
      <div className='container_custom'>
        <div className='title container'>
          <h2><p>  Which device model are you using?     </p></h2>
          <h4> <p>   Not sure which model your device is?   </p></h4>
        </div>
        <div className='box_containerThird'>
          <div className='boxesThird'>

            {allModels && allModels.map((item, index) => {
              return (
                <div key={index} 
                 //className={storeData.selectedModelType === item  ? style.selecteditem : style.selectitem}
                 className="col-6 col-sm-4 col-md-3 col-lg-2 selectitemThird"
                  > 
                  <SelectItem item={item} setItem={goNavigation} key={index}   />
                </div>
              )
            })}

          </div>
        </div>
        <div className="gap"></div>
        <div className="gap"></div>
        <div></div>
        <div></div>
      </div>
      <div className="gap"></div>
        <div className="gap"></div>
      <Footer navigation={"third"}
      device={devicetypename}classification={classificationname}model="current"
      value={50} />
    </div>
  )
}

export default QuoteDetailthird;
