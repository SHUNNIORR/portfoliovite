import React from 'react'
import Slider from './Slider';
import "./Slider.css"

    const slidesInfo=[
    {
        src:"https://cdn.pixabay.com/photo/2018/02/20/20/44/woman-holding-a-smartphone-3168797_960_720.jpg",
        alt:"Project 1",
        desc: "Project 1"
    },
    {
        src:"https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_960_720.png",
        alt:"Project 2",
        desc: "Project 2"
    },
    {
        src:"https://cdn.pixabay.com/photo/2017/08/05/21/56/laptop-2585956_960_720.jpg",
        alt:"Project 3",
        desc: "Project 3"
    }
];
    const slides = slidesInfo.map(slide=>(
        <div className="slide-container">
            <img src={slide.src} alt={slide.alt}></img>
            <div className="slide-desc">
                <span>{slide.desc}</span>
            </div>
        </div>
    ));

    export default slides;