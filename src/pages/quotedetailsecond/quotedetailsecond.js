import React, { useEffect, useState } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useHistory,useParams } from 'react-router-dom';

import SelectItem from '../../components/selectitem';

import './two.css';

function QuoteDetailSecond(props) {
  const {devicetypename}=useParams();
  const [allClassification,setClassification]=useState("")

  const history = useHistory()

  // var txt1 = storeData.selectedDeviceType;
  // var txt2 = storeData.selectedItem;
  // var txt;
  // if (txt1 !== "") { txt = txt1; } else { txt = txt2; };

  

  useEffect(() => {
    fetch("/ClassificationByDevice",{
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
      setClassification(result.categ.subClassifications);
    })
    
  }, [])

  const goNavigation=(item)=>{
    if(item.subModels.length!==0){
      history.push(`/Device/${devicetypename}/classification/${item.name}`)
    }else{
      history.push(`/Device/${devicetypename}/Classification/${item.name}/model/0/color/0`)
    }
  }

  return (
    <div className='container_body'>
      <div className='body_header'>
        <Header />
      </div>
      <div className='container_custom'>
        <div className='title_container'>
          <h2>What can we help with?</h2>
        </div>
        <div className='box_containerSecond'>
          <div className='boxesSecond'>

            {allClassification?allClassification.map((item, index) => {

              return (  <div key={index}  className="col-5 col-sm-5 col-md-4 col-lg-2 selectitemSecond" > 
                <SelectItem item={item} setItem={goNavigation} key={index} />
            </div>
              )
             }):null}
          </div>
        </div>
        <div className="gap"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> 
      <Footer navigation={"second"}
      device={devicetypename}classification="current" 
      value={40} />
    </div>
  );
}

export default QuoteDetailSecond;
