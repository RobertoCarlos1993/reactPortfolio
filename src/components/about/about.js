import React, { useState, useEffect } from 'react';

import './about.css';




const About= () =>{

   useEffect(()=>{

      const scrollAbout = ()=>{

           let aboutText = document.querySelector(".about-text");

           aboutText.classList[(window.scrollY> 290) ? 'add' : 'remove']('hidden');

           let flexItems = document.querySelectorAll("div > .flex-item");

           if(window.scrollY > 310) {

               flexItems.forEach((element,index)=>{
                   setTimeout(function(){
                       element.classList.add('is-showing');
                   },200*(index+1));
               });

           }else {

               flexItems.forEach((element,index)=>{
                   setTimeout(function(){
                       element.classList.remove('is-showing');
                   },200*(index+1));
               });
           }

       };

       window.addEventListener('scroll', scrollAbout);


       return function cleanup() {
         window.removeEventListener('scroll',scrollAbout);
      };

   },[]);



        return(
            <div className="container-fluid about position-relative">
                <div className="about-text position-absolute">
                    <p>About me</p>
                </div>
                <div className="flex-item position-relative">
                    <div className="about-me-info position-absolute">
                        <p className="h1 about-me-title font-weight-bold">About me.</p>
                        <p className="about-me-text mt-4" id="first-p">I am Roberto Carlos a 24 years-old London based <strong>Full-stack Developer</strong>. I am obsessed with everything related
                        around web tech.</p>
                      <p id="second-p">I enjoy to develop rich web <strong>experience</strong>, <strong>interactive</strong> user experience, <strong>responsive</strong> and <strong>mobile friendly</strong> design.
                        When not working or investigating about web dev, I enjoy reading about different topics from finance to health.</p>
                    </div>
                </div>
                <div className="flex-item">
                  <div className="box-item">
                     <div className="info mx-auto">
                        <h3>Web Design</h3>
                        <p className="h5">Wireframes / Responsive Design/ Photoshop</p>
                        <i className="fas fa-pencil-alt mt-4"></i>
                     </div>
                  </div>
                  <div className="box-item">
                     <div className="info mx-auto">
                        <h3>Web Development</h3>
                        <p className="h5">HTML / CSS / Bootstrap / Javascript / React.js</p>
                        <i className="fas fa-code mt-4"></i>
                     </div>
                  </div>
                  <div className="box-item">
                     <div className="info mx-auto">
                        <h3>Version Control</h3>
                        <p className="h5">Git</p>
                        <i className="fas fa-code-branch mt-4"></i>
                     </div>
                  </div>
                  <div className="box-item">
                     <div className="info mx-auto">
                        <h3>Next Challenge</h3>
                        <p className="h5">MySQL / Ruby on Rails</p>
                        <i className="fas fa-tasks mt-4"></i>
                     </div>
                  </div>
               </div>
            </div>
        );
};

export default About;
