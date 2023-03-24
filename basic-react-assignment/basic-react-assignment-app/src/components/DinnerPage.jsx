import React from 'react'
import Nav from "./Nav"
import "../styles/BreakfastPage.css"
import img from "../images/breakfast1.png"
import img2 from "../images/1.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function clickedFunc() {
    document.getElementById("overviewId").style.display = "";
    document.getElementById("contactId").style.display = "none";
    document.getElementById("btnOv").style.color = "red";
    document.getElementById("btnCo").style.color = "black";
}
function clickedFunc2() {
    document.getElementById("overviewId").style.display = "none";
    document.getElementById("contactId").style.display = "block";
    document.getElementById("btnOv").style.color = "black";
    document.getElementById("btnCo").style.color = "red";
}

function BreakfastPage() {
    return (<>
        <Nav />
        <div className='container'>
            <div className='img-container'>
                <img className='img-fluid img'
                    src={img} alt="Restaurant Img" />
                <button type="button" className=" modalBtn btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Gallary View
                </button>
            </div>
            <div className="modal modal-lg fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Carousel
                                infiniteLoop
                                // showStatus={false} use this for hide 2 of 2 status
                                // showArrows={false} use this to hide directional arrows
                                // showThumbs={false} use this to hide thumbnails
                                // showIndicators={false} use this to hide dot dot indicators
                                interval={2000}

                            >
                                <div>
                                    <img src={img} alt="Item1" />
                                </div>
                                <div>
                                    <img src={img2} alt="Item2" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='container mainCont'>
            <h1>The Big Chill Cakery</h1>
            <div className='d-flex container border-bottom'>
                <button id='btnOv' className='btn' onClick={() => clickedFunc()} >Overview</button>
                <button id='btnCo' className='btn' onClick={() => clickedFunc2()} >Contact</button>
            </div>
            <div id='overviewId' className="container overviewDiv">
                <h4>About this place</h4>
                <h6>Cuisine</h6>
                <p>Bakery, Fast-Food</p>
                <h6>Average Cost</h6>
                <p>₹700 for two people(approx)</p>
            </div>
            <div id='contactId' className="container contactDiv">
                <h4>Phone Number</h4>
                <p>+91 1232345345</p>
                <h6>The Big Chill Cakery</h6>
                <p>shop 1.Plot D, Sam Complex, ChiCholi, Mumbai, 400000, Maharashtra.</p>
            </div>
        </div>
    </>
    )
}

export default BreakfastPage