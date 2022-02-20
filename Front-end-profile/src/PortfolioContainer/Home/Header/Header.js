import React, { useState, useEffect } from 'react';
import {TOTAL_SCREEN, GET_SCREEN_INDEX} from '../../../utilities/commonUtils';
import ScrollService from '../../../utilities/ScrollService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

//redux stuff
import { getData } from '../../../redux/actions/dataActions';
import { useSelector, useDispatch } from 'react-redux'

import './Header.css'

function Header(props) {
    
    const [selectScreen, setSelectScreen] = useState(0)
    const [showHeaderOptions, setShowHeaderOptions] = useState(false)
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
      

    const updateCurrentScreen = (currentScreen) =>{
        if(!currentScreen || !currentScreen.screenInView)
            return;
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
        if(screenIndex < 0)
            return 
    }

    let currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen)

    const getHeaderOptions = () => {
        return (
            TOTAL_SCREEN.map((screen, i)=>(
                <div key={screen.screen_name} className={getHeaderOptionsClass(i)}
                onClick={()=>switchScreen(i, screen)}>
                    <span >{screen.screen_name}&nbsp;&nbsp;</span>
                </div>
            ))
        )
    }

    const getHeaderOptionsClass = (index) =>{
        let classes = 'header-option';
        if(index < TOTAL_SCREEN.length -1){
            classes += "header-option-seperator";

        }
        if(selectScreen === index){
            classes += 'selected-header-option'
        }
        return 
    }


    const switchScreen =(index, screen)=>{
        let screenComponent = document.getElementById(screen.screen_name)
        if(!screenComponent)
            return;

        screenComponent.scrollIntoView({behavior: "smooth"})
        setSelectScreen(index)
        setShowHeaderOptions(false);

    }



    return (
        <div>
            <div className='header-container' onClick={()=> setShowHeaderOptions(!showHeaderOptions)}>
                <div className='header-parent'>
                    <div className='header-hamburger' onClick={()=>setShowHeaderOptions(!showHeaderOptions)}>
                        <FontAwesomeIcon className='header-hamburger-bars' icon={faBars }/>
                    </div>
                    <div className='header-logo' >
                        {dataApi.map((item, key)=>(
                        <span key={key}>{item.name}</span>
                        ))}
                    </div>
                    <div className={(showHeaderOptions)? "header-options show-hamburger-options": "header-options"}>
                        {getHeaderOptions()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;