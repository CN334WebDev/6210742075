import React from "react";
import Typical from "react-typical";
import './Profile.css'

function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100008465798599">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/poom_jc/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I' M <span className="highlighted-text">Poom</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Poom-cyber",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "React",
                    1000,
                    "React Native",
                    1000,
                    "Laravel",
                    1000,
                    "Express JS",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Poom of build application with front and back end
              </span>
            </span>
          </div>
          <div className="profile-options">
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
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
