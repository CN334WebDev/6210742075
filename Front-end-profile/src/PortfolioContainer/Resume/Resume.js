import React, { useState, useEffect } from 'react';
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/Animation";
//redux stuff
import { getDataSkill } from '../../redux/actions/dataActions';
import { useSelector, useDispatch } from 'react-redux'

import "./Resume.css";

function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
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

    const ResumeHeading = (item) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{item.heading ? item.heading : ""}</span>
                    {item.fromData && item.toDate ? (
                        <div className="heading-date">
                            {item.fromData + " " + item.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                    <div className="resume-sub-heading">
                        <span>{item.subHeading ? item.subHeading : ""}</span>
                    </div>
                    <div className="resume-heading-description">
                        <span>{item.description ? item.description : ""}</span>
                    </div>
                </div>
            </div>
        );
    };

    const resumeBullet = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
    ];

    const programmingSkillDetails = [
        { skill: "JavaScript", ratingPercentage: 85 },
        { skill: "React JS", ratingPercentage: 85 },
        { skill: "React Native", ratingPercentage: 85 },
        { skill: "Python", ratingPercentage: 85 },
        { skill: "Laravel", ratingPercentage: 85 },
        { skill: "Java", ratingPercentage: 85 },
        { skill: "HTML", ratingPercentage: 85 },
        { skill: "Server Config", ratingPercentage: 85 },
    ];

    const projectDetails = [
        {
            title: "Covid-19 Application",
            duration: { fromDate: "2/2022", toDate: "2/2022" },
            description: "Application covid-19 that use react and react-native framework",
        },
        {
            title: "KruChana Application",
            duration: { fromDate: "2/2022", toDate: "2/2022" },
            description: "Application covid-19 education that use react-native framework",
        },
        {
            title: "Todo List Application",
            duration: { fromDate: "2/2022", toDate: "2/2022" },
            description: "Todo list mobile application that use react native and redux to build",
        },
        {
            title: "Moc Application",
            duration: { fromDate: "2/2022", toDate: "2/2022" },
            description: "Moc Application that use react-native and Redux to build Application",
        },
    ];

    const resumeDetail = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"Thammasat"}
                description={"Bachelor of engineer software engineer"}
                fromData={"2019"}
                toDate={"2022"}
            />
        </div>,
        <div className="resume-screen-container" key="work-experience">
        </div>,
        <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
        >
            {programmingSkillDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                </div>
            ))}
        </div>,
        <div className="resume-screen-container" key="projects">
            {projectDetails.map((pd, index) => (
                <ResumeHeading
                    key={index}
                    heading={pd.title}
                    subHeading={pd.subHeading}
                    description={pd.description}               
                />
            ))}
        </div>,
        <div className="resume-screen-container" key="interests">
            <ResumeHeading heading="Website Developer" description="I want to learn more about build a website application" />
            <ResumeHeading heading="Mobile Developer" description="I want to learn more about build a mobile application" />
            <ResumeHeading heading="Blockchain Developer" description="I want to learn more about build a blockchain developer" />
        </div>,
    ];

    const handleCarousal = (index) => {
        console.log(index);
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullet = () => {
        return resumeBullet.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
            >
                <img
                    className="bullet-logo"
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt="no internet"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreen = () => {
        return (
            <div
                style={carousalOffSetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetail.map((ResumeDetail) => ResumeDetail)}


            </div>
        );
    };

    return (
        <div className="resume-container screen-container" id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My Details"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullet()}</div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
