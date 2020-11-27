import React,{useEffect, useState} from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import SelectItem from '../../components/selectitem';
import { useHistory } from 'react-router-dom';
import "./quotedetailfirst.css";


function QuoteDetailFirst(props) {
  const [allDevices,setDevices]=useState("");
  const history=useHistory();

  useEffect(()=>{
    fetch("/api/allDeviceTypes")
    .then(res=>res.json())
    .then(result=>{
      console.log(result);
      setDevices(result.categs)
    })

  },[])
  const goNavigation=(item)=>{
    if(item.subClassifications.length!==0){
      history.push(`/Device/${item.name}`)
    }else{
      history.push(`/Device/${item.name}/Classification/0/model/0/color/0`)
    }
  }


  return (
    <div className='container_body'>
      <div className='body_header'>
        <Header />
     </div>
      <div className='container_custom'>

        <div className='title_container'>
          <h1>What can we help with?</h1>

        </div>
        <div className='box_containerFirst'>
          <div className='boxesFirst'>

            {allDevices?allDevices.map((item, index) => {
              return (
              //  col-6 col-sm-4 col-md-3 col-lg-2
                
                    <div key={index} 
                    //className={storeData.selectedDeviceType === item ? style.selecteditem : style.selectitem}
                    className="col-5 col-sm-4 col-md-3 col-lg-2 selectitemFirst"
                     >
                      <SelectItem item={item} setItem={goNavigation} key={index} />
                    </div>
              //  <p>hello</p>
               
              )
            }):null}


          </div>
        </div>
        <div className="gap"></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="footerarea">
        <Footer navigation={"first"}
        device="current"
        // classification={classificationname}model={modelname} 
        // color={colorname}
        value={0} />
      </div>
      
    </div>
  );
}

export default QuoteDetailFirst;

