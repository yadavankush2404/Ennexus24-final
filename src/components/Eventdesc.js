// import React from 'react';
// import "./eventdesc.css";
// import Winner from "./Winner";
// import { Link } from 'react-router-dom';

// export default function Eventdesc(props) {
//     return (
//         <> 
//             <div className="container">
//                     <Link to={'/'} className='back-btn'><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
//                 <div className="imgBx">
//                     <img className='imn' src={props.imglink} alt="event background" />
//                 </div>
//                 <div className="details">
//                     <div className="content">
//                         <h2>{props.name} <br/>
//                             <hr style={{ width: "50%", color: "white" }}></hr>
//                         </h2>
//                         <p>
//                             {props.descc}
//                         </p>
//                         <h2>Winners</h2>
//                         <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "2rem" }}><Winner photo={props.photo1} Name={props.Name1} branch={props.branch1} /><Winner photo={props.photo2} Name={props.Name2} branch={props.branch2} /><Winner photo={props.photo3} Name={props.Name3} branch={props.branch3} /></div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

import React from 'react';
import { useRef, useState, useEffect } from 'react';
import "./Content.css";

export default function Eventdesc(props){
    return(
        <>
             <div className="row featurette mb-5 mx-auto" style={{color:'#070F2B'}}>
        <h1 className='text-center mb-5 mx-auto win_text' style={{paddingTop:'8rem'}}>{props.name}</h1>
        <div className="col-md-7">
          <p className="lead"  style={{color:'#F3F0CA', textAlign:'justify' }}>
          {props.descc}
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