import React from 'react'
import './about.css'
import TextShpere from './TextShpere';
import Eventimgs from './Eventimgs';

export default function About() {
  return (<>
    <div id="aboutmain" style={{ height: "10rem" }}></div>
    <div className="main">
      {/* <div className="threeD">
        <TextShpere />
      </div> */}
      <div className="en-content">
        <h1 className="titlw">Ennexus</h1>
        {/* <div className="titlw">
          <h2>Ennexus</h2>
          <h2>Ennexus</h2>
        </div> */}
        <hr style={{ color: "white" }}></hr>
        <p className="descr">Ennexus is a technical fest that is specifically designed for students to work and participate in the field of Computer Science. It is a platform that provides students with an opportunity to showcase their technical skills and compete with their peers from the same and other institutions as well. Ennexus offers a variety of events and competitions that are aimed at promoting innovation and creativity in the field of technology.<br/><br/>
          Overall, Ennexus is a festival that brings together the best and brightest minds in the field of technology, providing them with an opportunity to network, learn, and showcase their skills. It is an event that is not to be missed by anyone who is passionate about technology and innovation in the field of computer science.
        </p>
      </div>
    </div>
      <Eventimgs/>
      <p className='descr' style={{ color: "rgb(0, 225, 143)" , marginInline:"50px" }}>Ennexus goes beyond borders with online events connecting tech enthusiasts globally. Dive into virtual hackathons, attend career guidance sessions led by industry veterans, and explore the future of technology from the comfort of your home. Don't miss out on this opportunity to expand your horizons and shape your tech career!</p>
      <div className="my-5" style={{width:"100%" , display:"flex" , justifyContent:"center"}}>
        <iframe width="853" height="480" src="https://www.youtube.com/embed/Ez0VpqBuwvY" title="Connoisseur&#39;22" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
  </>
  );
}


