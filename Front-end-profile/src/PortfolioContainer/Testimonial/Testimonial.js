import React, { useState, useEffect } from 'react';
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/Animation";
import Card from '../../components/Cards/CardUI'
import img1 from '../../assets/Home/artistic-retrowave-sunrise-vaporwave.jpg'
import img2 from '../../assets/Home/5236169.jpg'
import img3 from '../../assets/Home/bg.jpg'
import './Testimonial.css'


function Testimonial(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) return;
        Animation.animation.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);



    return (
        <div className="resume-container screen-container" id={props.id || ""}>
            <div>
                <ScreenHeading title={"Projects"} subHeading={"My Projects"} />
                <div className='container-fluid d-flex justify-content-center'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <Card imgsrc={img1} 
                            title={"Project 1"} 
                            description={"Project 1"} 
                            btn={"Github"}/>
                        </div>
                        <div className='col-md-4'>
                            <Card imgsrc={img2} 
                            title={"Project 2"} 
                            description={"Project 2"} 
                            btn={"Github"}/>
                        </div>
                        <div className='col-md-4'>
                            <Card imgsrc={img3} 
                            title={"Project 3"} 
                            description={"Project 3"} 
                            btn={"Github"}/>
                        </div>
                    </div>
                </div>
                <div className='container-fluid d-flex justify-content-center'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <Card imgsrc={img1} 
                            title={"Project 1"} 
                            description={"Project 1"} 
                            btn={"Github"}/>
                        </div>
                        <div className='col-md-4'>
                            <Card imgsrc={img2} 
                            title={"Project 2"} 
                            description={"Project 2"} 
                            btn={"Github"}/>
                        </div>
                        <div className='col-md-4'>
                            <Card imgsrc={img3} 
                            title={"Project 3"} 
                            description={"Project 3"} 
                            btn={"Github"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Testimonial;