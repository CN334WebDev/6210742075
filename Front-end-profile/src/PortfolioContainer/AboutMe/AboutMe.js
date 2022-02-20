import React, { useState, useEffect } from 'react';
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/Animation";
//redux stuff
import { getData } from '../../redux/actions/dataActions';
import { useSelector, useDispatch } from 'react-redux'

import "./AboutMe.css";

function AboutMe(props) {

  const [loading, setIsLoading] = useState(false)

  const dispatch = useDispatch();
  const dataApi = useSelector(state => state.data.data)

  useEffect(() => {
    const loadSpots = async () => {
      setIsLoading(true);
      await dispatch(getData());
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

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
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
              {renderHighlight()}
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
