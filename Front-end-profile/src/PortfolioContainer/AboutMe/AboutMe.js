import React, { useState, useEffect } from 'react';
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/Animation";
//redux stuff
import { getDataSkill } from '../../redux/actions/dataActions';
import { useSelector, useDispatch } from 'react-redux'

import "./AboutMe.css";

function AboutMe(props) {

  const [loading, setIsLoading] = useState(false)

  const dispatch = useDispatch();
  const dataApi = useSelector(state => state.data.dataSkill)

  useEffect(() => {
    const loadSpots = async () => {
      setIsLoading(true);
      await dispatch(getDataSkill());
      setIsLoading(false);
    };
    loadSpots();
  }, []);

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animation.animation.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description: "     Interested in the position of a Software Engineer where I can contribute"+
    "my analytical skills and knowledge acquired by pursuing my degree in"+
    "Software Engineering. Looking for a dynamic and progressive company"+
    "where my skills are utilized in the maximum way possible and seeking a"+
    "challeneging internship.",
    highlights: {
      bullets: ["Fulltime handsome", "Sometime so cool", "Hungry some time", "1", "2", "3"],
      heading: "My Skill Hilight :",
    },
  };

  const renderHighlight = (value, i) => {
    return dataApi.map((item, index)=>(
      <div className="highlight" key={index}>
      <div className="highlight-blob"></div>
      <span key={index}>{item}</span>
    </div>
    ))
    
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-descryption">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
                {dataApi.map((item, index) => (
                  <div className="highlight" key={index}>
                  <span key={index}>{item.skill}</span>
                  <span key={index}>{item.skill1}</span>
                  <span key={index}>{item.skill2}</span>
                  <span key={index}>{item.skill3}</span>
                  <span key={index}>{item.skill4}</span>
                  <span key={index}>{item.skill5}</span>
                  <span key={index}>{item.skill6}</span>
                  <span key={index}>{item.skill7}</span>
                  <span key={index}>{item.skill8}</span>
                  <span key={index}>{item.skill9}</span>
                </div>
              ))}
            </div>
            <div className="about-me-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a
              href="Resume_JIrawat_Chaichompu.pdf"
              download="Jirawat Resume_JIrawat_Chaichompu.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
