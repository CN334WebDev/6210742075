import React, { Component } from 'react';

class Animation extends Component {
    static animation = new Animation();
    
    fadeInScreen = (screen_name) => {
        let screen  = document.getElementById(screen_name);
        if(!screen_name || !screen)
            return

        screen.style.opacity = '5';
        screen.style.transform = "translateY(1px)";
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Animation;