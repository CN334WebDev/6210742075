import React from 'react';
import './card-style.css'

function CardUI(props) {
    return (
        <div className='card text-center shadow'>
            <div className='overflow'>
                <img src={props.imgsrc} alt="img1" className='card-img-top'/>
            </div>
            <div className='crad-body text-dark'>
                <h4 className='card-title'>
                    {props.title}
                </h4>
                <p className='description'>
                    {props.description}
                </p>
            </div>
            <div className='button-git'>
                <a href={props.git} className='button-color'>{props.btn}</a>
            </div>
        </div>
    );
}

export default CardUI;