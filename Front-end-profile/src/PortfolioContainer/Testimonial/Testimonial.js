import React, { useState, useEffect } from 'react';
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/Animation";
import Card from '../../components/Cards/CardUI'

//redux stuff
import { getDataProject } from '../../redux/actions/dataActions';
import { useSelector, useDispatch } from 'react-redux'

import './Testimonial.css'


function Testimonial(props) {


    const [loading, setIsLoading] = useState(false)

    const dispatch = useDispatch();
    const dataApi = useSelector(state => state.data.dataProject)

    useEffect(() => {
        const loadSpots = async () => {
          setIsLoading(true);
          await dispatch(getDataProject());
          setIsLoading(false);
        };
        loadSpots();
      }, []);

      console.log(dataApi)


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
                <div className='container-project'>
                        
                    {dataApi.map((item, index)=>(
                        <div className='card-project'>
                            <Card imgsrc={item.url} 
                            title={item.title} 
                            description={item.description} 
                            btn={"Github"}
                            git={item.git}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Testimonial;