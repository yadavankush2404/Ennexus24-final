import React from 'react';
import { Link } from 'react-router-dom';
import Eventcard from './Eventcard';
import Slider from "react-slick";
import './carousel.css';

import img_1 from './assets/images/codigo.jpeg'
import img_2 from './assets/images/DK.jpeg'
import img_3 from './assets/images/Flip.jpeg'
import img_4 from './assets/images/WTW.jpeg'
import img_5 from './assets/images/CTF.jpeg'
import img_6 from './assets/images/Algo.jpeg'
import Eventimgs from './Eventimgs';

export default function Event() {
    const settings1 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <>
            <div style={{ marginBottom: "10rem" }} id="eventsmain"></div>
            <Link to={'/'} className='back-btn m-3' style={{marginTop:"20px"}}><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
            <section >
                <div className="content">
                {/* <h4>ENNEXUS'24</h4> */}
                    <h2>EVENTS</h2>
                    <h2>EVENTS</h2>
                <h3>Creativity | Fun | Learning</h3>
                </div>
            </section>
            <p className='descr m-3' style={{color:"white"}}>
            Experience the cutting-edge amalgamation of technology and innovation at Ennexus, the premier tech fest of CESMMUT. Dive into a plethora of exhilarating events designed to challenge, inspire, and showcase the brightest minds in the tech world. From electrifying hackathons pushing the boundaries of coding prowess to riveting tech-talks by industry leaders shaping the future, Ennexus offers something for every tech enthusiast. Engage in hands-on workshops exploring emerging technologies like AI, blockchain, and IoT, or put your skills to the test in thrilling gaming competitions. Join us at Ennexus and immerse yourself in the thrilling world of technology like never before!
            </p>
            <Eventimgs/>
            <hr style={{ color: "white", width: "50vw", margin: "10px auto" }}></hr>
            <div className='pc-slider' style={{marginBottom: "40px"}}>
                <Slider {...settings1}>
                    <Eventcard name='Codigo' d="Thrilling coding competition with thought-provoking questions to test your coding skills." imglink={img_1} link='https://getbootstrap.com/' eve={1} />
                    <Eventcard name='Debugger King' d="Prove debugging expertise in challenging scenarios. Compete to solve complex programming issues." imglink={img_2} link='https://getbootstrap.com/' eve={2} />
                    <Eventcard name='Carpe Diem' d="Duo event solving puzzles & problems with two-person teams working together." imglink={img_3} link='https://getbootstrap.com/' eve={3} />
                    <Eventcard name='Wield The Web' d="Submit web dev projects to display creativity & process in exciting event." imglink={img_4} link='https://getbootstrap.com/' eve={4} />
                    <Eventcard name='CTF' d="Brightest in cybersecurity will come together to showcase their skills, creativity, and strategic thinking." imglink={img_5} link='https://getbootstrap.com/' eve={5} />
                    <Eventcard name='Algo Hunt' d="From unraveling intricate algorithms to applying problem-solving techniques, Algo Hunt promises an intellectually stimulating experience. " imglink={img_6} link='https://getbootstrap.com/' eve={6} />
                </Slider>
            </div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade phone-slider">
                <div className="carousel-inner mx-auto">
                    <div className="carousel-item active">
                        <img src={img_1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h5>Codigo</h5>

                            <button type='submit' className='link-btn'><Link className='nav-link' /* target='_blank' rel="noopener noreferrer" */ to={`/event1`}>Read more</Link></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img_2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h5>Debugger King</h5>

                            <button type='submit' className='link-btn'><Link className='nav-link active' /* target='_blank' rel="noopener noreferrer" */ to={`/event2`}>Read more</Link></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img_3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h5>Carpediem</h5>

                            <button type='submit' className='link-btn'><Link className='nav-link active' /* target='_blank' rel="noopener noreferrer" */ to={`/event3`}>Read more</Link></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img_4} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h5>Wield The Web</h5>

                            <button type='submit' className='link-btn'><Link className='nav-link active' /* target='_blank' rel="noopener noreferrer" */ to={`/event4`}>Read more</Link></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img_5} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h5>CTF</h5>

                            <button type='submit' className='link-btn'><Link className='nav-link active' /* target='_blank' rel="noopener noreferrer" */ to={`/event5`}>Read more</Link></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img_6} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h5>Algo Hunt</h5>

                            <button type='submit' className='link-btn'><Link className='nav-link active' /* target='_blank' rel="noopener noreferrer" */ to={`/event5`}>Read more</Link></button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

