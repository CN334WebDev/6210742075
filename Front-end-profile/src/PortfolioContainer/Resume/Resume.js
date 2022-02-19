import React, {useState} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService';
import Animation from '../../utilities/Animation';
import './Resume.css'

function Resume(props) {

    const [selectedBulletIndex, selectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) return;
        Animation.animation.fadeInScreen(props.id);
      };
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return (
        <div className='resume-container screen-contaiber'>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Details'}/>
            </div>
        </div>
    );
}

export default Resume;