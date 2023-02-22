import { faBook, faCertificate, faComputerMouse, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import  './Home.css'

const Home = () => {
    const [data,setData]=useState([]);
  useEffect(()=>{
    fetch(' https://openapi.programming-hero.com/api/quiz')
    .then(res=>res.json())
    .then(data=>setData(data.data))
  },[])
    return (
        <div>
        <div className='container'>
            <div className="display-container">
            <div className="text">
              <h1><FontAwesomeIcon className='elearn' icon={faComputerMouse} />  eLearning Give A Test</h1>
              <p><FontAwesomeIcon icon={faBook} />  Online Learning</p>
              <p><FontAwesomeIcon icon={faGlobe} />  Live Course</p>
              <p><FontAwesomeIcon icon={faCertificate} />  Certified Lesson</p>

            </div>
            <div className="home-image">
               <img src="https://www.scnsoft.com/education-industry/elearning-portal/elearning-portals-cover-picture.svg" alt="" />
            </div>
            </div>
            
        </div>
        <div className="quiz">

        {
            data.map(sub=><Quiz
                key={sub.id}
                sub={sub}
                ></Quiz>)
            }
            </div>
        </div>
    );
};

export default Home;