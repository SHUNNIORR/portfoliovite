import React, { useEffect, useRef, useState } from "react";
import "./recent.css";
import { EXPERIENCES } from "./experiences";
import {Swiper,SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const RecentWork = () => {
  const [screenSize, setScreenSize] = useState(3); // Valor por defecto para resoluciones mayores a móvil

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { // Cambia este valor según el ancho que consideres para el tamaño de móvil
        setScreenSize(1);
      } else {
        setScreenSize(3);
      }
    };

    // Agregar el listener para el evento de cambio de tamaño de ventana
    window.addEventListener('resize', handleResize);

    // Llamar a handleResize al montar el componente para establecer el tamaño inicial
    handleResize();

    // Eliminar el listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="recent-container">
      <h2>Experiences.</h2>
      <Swiper
        slidesPerView={screenSize}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      {EXPERIENCES.map((experience, index) => (
        <SwiperSlide>
          <div className="experience-card">
            <div className="experience-card-header">
              <h4 className="experience-card-title">
                {experience.projectName}
              </h4>
              <strong>{experience.role}</strong>
            </div>
            <p className="experience-card-description">
              {experience.description}
            </p>
            <div className="experience-card-tasks">
              <strong>Skills</strong>
              <div className="experience-card-tasks-skillContainer">
                {experience.skills.map((skill) => (
                  <div className="experience-card-tasks-skill">
                    <p>{skill.name}</p>{" "}
                    <img
                      className="experience-card-tasks-img"
                      src={skill.urlImg}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="experience-card-image-container">
              <img
                className="experience-card-image"
                src={experience.projectImg}
                alt="Project Screenshot"
              />
              <a
                className="experience-card-link"
                href="https://www.capsulasexpressnutresa.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
        
      
    </div>
  );
};

export default RecentWork;
