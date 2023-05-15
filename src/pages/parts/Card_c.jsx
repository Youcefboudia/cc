import React from "react";
const CardSn = (props) => {
  return (
    
      <div class="CardSn shadow rounded-bottom-3">
        <div class="CardSn-image">
          <img
            src={props.img}
            alt="CardSn Image"
          />
          <div class="CardSn-overlay d-flex  f-d-c jus-c">
            <h1 class="CardSn-date fs-1">{props.data}</h1>
            <h1 class="CardSn-title fs-4">
            {props.title}
            </h1>
          </div>
        </div>
        <div class="CardSn-content">
          <p class="CardSn-text ">
            {props.text}
            <a class="btn btn-link" href="#pages">
                            Read More 
                            
                        </a>
          </p>
          
        </div>
      </div>
    
  );
};

export default CardSn;