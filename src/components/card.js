import React from 'react';
import "./Content.css";
// import ReactDOM from 'react-dom/client';


export default function Card(props){
    return(
        <>
        {/* <div className="wcard-content"> */}
        <img
          className="bd-placeholder-img rounded-circle"
          width={140}
          height={140}
          src={props.src}
          aria-label="Placeholder: 140x140"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
           />

          <h2 className='mt-3' >{props.name}</h2>
          <p>
          Branch : {props.branch}
          </p>
          <p>
          {props.position}
          </p>
          {/* </div> */}
        </>
    );
}