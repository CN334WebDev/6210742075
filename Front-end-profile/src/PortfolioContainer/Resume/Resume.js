import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/Animation";
import "./Resume.css";

function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

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
                    <div className="heading-bullet">
                        <span>{item.heading ? item.heading : ""}</span>
                        {item.fromData && item.toDate ? (
                            <div className="heading-date">
                                {item.fromData + " " + item.toDate}
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
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
        { skill: "React native", ratingPercentage: 85 },
        { skill: "a", ratingPercentage: 85 },
        { skill: "a", ratingPercentage: 85 },
        { skill: "React JS1", ratingPercentage: 85 },
        { skill: "React native1", ratingPercentage: 85 },
        { skill: "a2", ratingPercentage: 85 },
        { skill: "a2", ratingPercentage: 85 },
    ];

    const projectDetails = [
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "2/2022", toDate: "2/2022" },
            description: "Test",
        },
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "2/2022", toDate: "2/2022" },
            description: "Test",
        },
    ];

    const resumeDetail = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"Thammasat"}
                subHeading={"Bachelor of engineer software engineer"}
                fromData={"2019"}
                toDate={"2022"}
            />
        </div>,
        <div className="resume-screen-container" key="work-experience">
            <ResumeHeading
                heading={"Poom cyber Tech"}
                subHeading={"No"}
                fromData={"2019"}
                toDate={"present"}
            />
            <div className="experience-description">
                <span className="resume-description-text">study</span>
            </div>
            <div className="experience-description">
                <span className="resume-description-text">study 2</span>
                <span className="resume-description-text">study 3</span>
                <span className="resume-description-text">study 3</span>
                <span className="resume-description-text">study 3</span>
            </div>
        </div>,
        <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
        >
            {programmingSkillDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span className="bullet-label">{skill.skill}</span>
                    <div className="skill-percentage">
                        <div
                            style={{ width: skill.ratingPercentage + "%" }}
                            className="active-percentage"
                        ></div>
                    </div>
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
                    fromData={pd.duration.fromDate}
                    toDate={pd.duration.toDate}
                />
            ))}
            <br />
            <br />
        </div>,
        <div className="resume-screen-container" key="interests">
            <ResumeHeading heading="Website Develop" description="Test" />
            <ResumeHeading heading="Mobile Develop" description="Test" />
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
                {/* Education */}
                <div className="resume-screen-container" key="education">
                    <div >
                        <div >
                            <div >
                                <span>Thammasat</span>
                                <div >2019 2022</div>
                            </div>
                            <div >
                                <span>Bachelor of engineer software engineer</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Work experience */}
                <div className="resume-screen-container" key="work-experience">

                </div>

                {/* Skill */}
                <div
                    className="resume-screen-container programming-skills-container"
                    key="programming-skills"
                >
                    {programmingSkillDetails.map((skill, index) => (
                        <div className="skill-parent" key={index}>
                            <div className="heading-bullet"></div>
                            <span className="bullet-label">{skill.skill}</span>
                            <div className="skill-percentage">
                                <div
                                    style={{ width: skill.ratingPercentage + "%" }}
                                    className="active-percentage"
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project */}
                <div className="resume-screen-container" key="projects">
                    {projectDetails.map((pd, index) => (
                     
                        <div >
                            <div >
                                <div >
                                    <span>{pd.title}</span>

                                    <div >
                                        {pd.duration.fromDate + " " + pd.duration.toDate}
                                    </div>

                                </div>
                                <div >
                                    <span>{pd.subHeading}</span>
                                </div>
                                <div>
                                    <span>{pd.description}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <br />
                    <br />
                </div>

                {/* Interast */}

                <div className="resume-screen-container" key="interests">

                    <div className="resume-heading">
                        <div >
                            <div >
                                <span>Website Develop</span>
                            </div>
                            <div>
                                <span>Test</span>
                            </div>
                        </div>
                    </div>
                </div>


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
