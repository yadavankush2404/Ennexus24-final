import React from 'react';
import { useRef, useState, useEffect } from 'react';
import "./Content.css";

export default function Event_desc(props){
    return(
        <>
             <div className="row featurette mb-5 mx-auto" style={{color:'#070F2B'}}>
        <h1 className='text-center mb-5 mx-auto win_text' style={{paddingTop:'8rem'}}>{props.name}</h1>
        <div className="col-md-7">
          <p className="lead"  style={{color:'#F3F0CA', textAlign:'justify' }}>
          {props.desc}
          </p>
        </div>
        <div className="col-md-5">
           <img style={{height: 356}} id="event-poster" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded" width={800} height={400} aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            src={props.src}/>
        </div>
      </div>
        </>
    );
}