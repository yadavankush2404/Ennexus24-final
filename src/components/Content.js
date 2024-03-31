import React from 'react';
// import { useRef, useState, useEffect } from 'react';
import "./Content.css";
// import ReactDOM from 'react-dom/client';
// import ss from "./assets/images/univ.jpg";
import Card from './card'  
import Gallery from './Gallery';
import Event_desc from './Event_desc';
import { Link } from 'react-router-dom';




export default function Content(props){
    return (
  <div className="container full">
  
  <main>
    
    <Link to={'/'} className='back-btn m-3'><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
    <div className="container marketing">
      < Event_desc name={props.name} desc = {props.descc} src={props.imglink}/>
      {/* <hr className="featurette-divider" /> */}

      <div className="row text-center">
        <div className="col-lg-3 col-md-6 col-sm-12 text-center gallery_pic">
        <Gallery src={props.ev1} />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center gallery_pic">
        <Gallery src={props.ev2} />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center gallery_pic">
        <Gallery src={props.ev3} />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center gallery_pic">
        <Gallery src={props.ev4} />

        </div>
      </div>
      

        {/* winner */}
        <div className="row mb-5 mx-auto">
        <h1 className='text-center my-5 win_text'>Winners 2K23</h1>
        <div className="col-lg-3 col-md-12 text-center winner text-center">
        <Card name={props.Name1} branch={props.branch1} position={props.pos1} src={props.photo1} />
        </div>

        {/* /.col-lg-4 */}
        <div className="col-lg-3 col-md-6 text-center winner text-center">
        <Card name={props.Name2} branch={props.branch2} position={props.pos2} src={props.photo2} />
        </div>

        {/* /.col-lg-4 */}
        <div className="col-lg-3 col-md-6 text-center winner text-center">
          <Card name={props.Name3} branch={props.branch3} position={props.pos3} src={props.photo3} />
        </div>
        {/* /.col-lg-4 */}
      </div>



        {/* extra */}
        <hr className="featurette-divider" />
      </div>
    
  </main>
  </div>
  
    )
    ;
}