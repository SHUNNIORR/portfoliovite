import React, { useEffect, useState } from 'react'
import { service } from '../../services/axiosInstance'
import './skills.css'

const Skills = () => {

    const skills = [
        {nombre_tecnologia:'React.js',url_technologia:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'},
        {nombre_tecnologia:'Node.js',url_technologia:'https://cdn.icon-icons.com/icons2/2699/PNG/512/nodejs_logo_icon_169910.png'},
        {nombre_tecnologia:'React Native',url_technologia:'https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1523276257276-EMMKZ7G962SDZKN2APIN/react_nativ_build_mobile_app-img.png?format=500w'},
        {nombre_tecnologia:'VTEX.io',url_technologia:'https://vtexhelp.vtexassets.com/_v/public/assets/v1/published/vtexhelp.help-io@2.1.3/public/logo.png'},
        {nombre_tecnologia:'Redux',url_technologia:'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png'},
        {nombre_tecnologia:'SCSS',url_technologia:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png'},
        {nombre_tecnologia: 'English Level: B1', url_technologia:'https://img.genial.ly/5f24b6ce74300d3aa3c043e8/2656ef4c-39ef-4e0d-8605-ce035d0485ce.png'},
        {nombre_tecnologia: 'HTML5', url_technologia:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png'},
        {nombre_tecnologia: 'CSS3', url_technologia:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png'},
        {nombre_tecnologia: 'Javascript', url_technologia:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'},

    ]
    const [skillsResponse, setSkillsResponse] = useState(skills)


    useEffect(() => {
      service.get().then(res => {
        setSkillsResponse(res.data.data)
      })
      .catch(error=>{
        console.log('ERROR', error)
      });
    }, [])
    

  return (
    <div className='skills-container'>
        <h3 >My skills.</h3>
        <div className='skillscard-container'>
            {skillsResponse.map((skill, index)=>(
                <div key={index} className='skill-card'>
                    <img className='skill-img' src={skill.url_technologia}/>
                    <p className='skill-info' >{skill.nombre_tecnologia}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills