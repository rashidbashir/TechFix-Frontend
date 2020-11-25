import React from 'react';



const SelectItem = (props) => {
  var result = `/img/${props.item.picture}.png`;


  return (
    <div
     className="perfectImgContainer"
      onClick={() => props.setItem(props.item)} 
    >
      
        <img src={result} alt="images"className="showImg" />
      
      <div>
        {props.item.name}
      </div>
    </div>
  )

};

export default SelectItem;