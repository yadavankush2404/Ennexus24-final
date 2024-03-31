import React from 'react';
import { useRef, useState, useEffect } from 'react';
import "./Content.css";

export default function Gallery(props){

    return(
        <>
        <img className="event-pic" src={props.src} alt="" />
        </>
    );
}