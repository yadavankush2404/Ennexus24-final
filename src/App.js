import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Event from './components/Event';
import Footer from './components/Footer';
// import Eventdesc from "./components/Event_desc";
import Faq from "./components/Faq";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import pic from './components/assets/images/pici.jpg'
import img_1 from './components/assets/images/codigo.jpeg'
import img_2 from './components/assets/images/DK.jpeg'
import img_3 from './components/assets/images/Flip.jpeg'
import img_4 from './components/assets/images/WTW.jpeg'
import img_5 from './components/assets/images/CTF.jpeg'
import img_6 from './components/assets/images/Algo.jpeg'
import ank from './components/assets/images/Ankush.jpg'
// import img_e1 from './components/assets/images/a.jpg'
import img_e2 from './components/assets/images/b.jpg'
// import img_e3 from './components/assets/images/c.jpg'
import img_e4 from './components/assets/images/d.jpg'
// import img_e5 from './components/assets/images/f.jpeg'
import img_e6 from './components/assets/images/g.jpeg'
import img_e7 from './components/assets/images/h.jpeg'
import img_e8 from './components/assets/images/i.jpeg'
import img_e9 from './components/assets/images/standi.jpg'
import img_e10 from './components/assets/images/mcq.jpg'
import img_e11 from './components/assets/images/j.jpeg'
import img_e12 from './components/assets/images/group.jpeg'
import img_e13 from './components/assets/images/k.jpg'
import img_e14 from './components/assets/images/l.jpg'
import img_e15 from './components/assets/images/m.jpg'
import img_e16 from './components/assets/images/n.jpg'
import img_e17 from './components/assets/images/o.jpg'
import c1 from './components/assets/images/codigo1.jpg'
import c2 from './components/assets/images/codigo2.png'
import c3 from './components/assets/images/codigo3.jpg'
import ctf1 from './components/assets/images/ctf01.jpeg'
import ctf2 from './components/assets/images/ctf2.jpg'
import ctf3 from './components/assets/images/ctf03.jpg'
import wtw1 from './components/assets/images/wtw1.jpg'
import wtw2 from './components/assets/images/wtw2.jpg'
import wtw3 from './components/assets/images/wtw03.jpeg'
import dk1 from './components/assets/images/dk1.jpg'
import dk2 from './components/assets/images/dk2.jpg'
import dk3 from './components/assets/images/dk3.jpg'
import ff1 from './components/assets/images/ff1.jpg'
import ff2 from './components/assets/images/ff2.jpg'
import ff3 from './components/assets/images/ff3.jpg'
import first from './components/assets/images/first.jpg'
import second from './components/assets/images/second.jpeg'
import third from './components/assets/images/third.jpeg'

import Content from "./components/Content";
// import Event_desc from "./components/Event_desc";

// import Homepage from "./components/Homepage";
// import Eventcard from './components/Eventcard';

function App() {
  return (
    <>
        <Router>
      <Navbar />
      <Home />
      <div style={{ height: '50vh' }}></div>
      <div className="bgdiv">
          <Routes>
          <Route exact path={`/`} element={<About />} />
            <Route exact path={`/eventsmain`} element={<Event />} />
            
            <Route exact path={`/event1`} element={<Content imglink={img_1} ev1={img_e10} ev2={img_e2} ev3={img_e14} ev4={img_e13} name='C o d i g o' descc='Get ready to put your coding skills to the test and rise to the challenge at Codigo! Join us for an exhilarating event filled with thought-provoking coding questions and a thrilling competition. This event consists of two rounds, where in the first round participants have to qualify quiz to assure their entry in the next round i.e. final round and final round will be conducted on HackerRank. Show off your expertise and discover new techniques as you compete against fellow programmers.' photo1={c1} Name1='Arnav Agrawal' branch1='IT' pos1="1st place" photo2={c2} Name2='Awijeet Singh' branch2='CSE' pos2='1st runner up' photo3={c3} Name3='Yash Sinha' branch3='CSE' pos3='2nd Runner up'/>} />

            <Route exact path={`/event2`} element={<Content imglink={img_2} ev1={img_e9} ev2={img_e7} ev3={img_e8} ev4={img_e10} name='D e b u g g e r  K i n g' descc='Are you a master of debugging? Do you have a knack for solving complex programming issues? Then get ready for the ultimate debugging showdown! Our upcoming debugging contest will bring together the best and brightest programmers to showcase their skills and compete in a series of challenging debugging scenarios.' photo1={dk1} Name1='Ashutosh Verma' branch1='CSE' pos1="1st place" photo2={dk2} Name2='Himanshu' branch2='CSE' pos2='1st runner up' photo3={dk3} Name3='Utkarsh' branch3='CSE' pos3='2nd Runner up'/>} />

            <Route exact path={`/event3`} element={<Content imglink={img_3} ev1={img_e7} ev2={img_e8} ev3={img_e15} ev4={img_e2} name='F l i p   F l o p' descc='Get ready to put your coding skills to the test and rise to the challenge at Codigo! Join us for an exhilarating event filled with thought-provoking coding questions and a thrilling competition. This event consists of two rounds, where in the first round participants have to qualify quiz to assure their entry in the next round i.e. final round and final round will be conducted on HackerRank. Show off your expertise and discover new techniques as you compete against fellow programmers.' photo1={ff1} Name1='Mukesh Kumar Singh & Ritesh Pandey' branch1='CSE' pos1="1st place" photo2={ff2} Name2='Rishikesh Jaiswal & Ritesh Srivastava' branch2='CSE' pos2='1st runner up' photo3={ff3} Name3='Shiv Kant Dhakre & Tejas Vishwakarma' branch3='CSE' pos3='2nd Runner up'/>} />

            <Route exact path={`/event4`} element={<Content imglink={img_4} ev1={img_e4} ev2={img_e6} ev3={img_e16} ev4={img_e11} name='W e i l d  T h e  W e b' descc='Unleashing the Power of Web Development. Showcase your creativity and technical prowess in this exciting event by submitting your web development projects. Attend a Webinar on Git and GitHub then the very first round is a quiz round based on the topics HTML, CSS, JS, and git& GitHub And in the second round participants have to give submission of their link with their GitHub.' photo1={wtw1} Name1='Ritesh Srivastava' branch1='ECE-(IOT)' pos1="1st place" photo2={wtw2} Name2='Ayush rai' branch2='CSE' pos2='1st runner up' photo3={wtw3} Name3='Avinash Gupta' branch3='CSE' pos3='2nd Runner up'/>} />

            <Route exact path={`/event5`} element={<Content imglink={img_5} ev1={img_e10} ev2={img_e17} ev3={img_e12} ev4={img_e9} name='C T F' descc='We were thrilled to announce our upcoming Capture the Flag (CTF) event, where the best and brightest in cybersecurity will come together to showcase their skills, creativity, and strategic thinking. Our event will bring together talented hackers from around the world to compete in a variety of challenges, including cryptography, reverse engineering, web exploitation, and more.' photo1={ctf1} Name1='Akarsh Goel' branch1='CSE' pos1="1st place" photo2={ctf2} Name2='Aarti Singh' branch2='CSE' pos2='1st runner up' photo3={ctf3} Name3='Aditi Gupta' branch3='CSE' pos3='2nd Runner up'/>} />
            
            <Route exact path={'/event6'} element={<Content imglink={img_6} ev1={img_e2} ev2={img_e7} ev3={img_e9} ev4={img_e17} name='A l g o   H u n t' descc='Algo Hunt is an exhilarating event designed to challenge participants problem-solving skills and algorithmic prowess. Through a series of thought-provoking questions and stimulating challenges, participants are invited to showcase their ability to navigate complex problems with innovative solutions' photo1={first} Name1='Team Bludgers' branch1='CSE' pos1="1st place" photo2={second} Name2='Team White Flag' branch2='CSE' pos2='1st runner up' photo3={third} Name3='Team Dot' branch3='CSE' pos3='2nd Runner up'/>} />
          </Routes>
        <Faq />
      </div>
        </Router>
      <Footer />
      {/* <Content imglink={img_2} ev1={pic} ev2={pic} ev3={pic} ev4={pic} name='C o d i g o' descc='Get ready to put your coding skills to the test and rise to the challenge at Codigo! Join us for an exhilarating event filled with thought-provoking coding questions and a thrilling competition. This event consists of two rounds, where in the first round participants have to qualify quiz to assure their entry in the next round i.e. final round and final round will be conducted on HackerRank. Show off your expertise and discover new techniques as you compete against fellow programmers.' photo1={ank} Name1='Name' branch1='CSE' pos1="1st place" photo2={ank} Name2='Name 2' branch2='CSE' pos2='1st runner up' photo3={ank} Name3='Name 3' branch3='CSE' pos3='2nd Runner up'/> */}
    </>
  );
}

export default App;
