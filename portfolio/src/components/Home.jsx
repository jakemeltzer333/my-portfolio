import React from 'react';

import photo from '../images/linkedinphoto.jpg';
import frontEndLogos from '../images/html-css-js-logo.png';
import logo from '../logo.svg';
import node from '../images/node.png';
import rails from '../images/ruby_on_rails.png';


const Home = () => {
    return (
      <div className='home-container'>  
        <img className='profile' src={photo}/>  
        <div className='summary'>
          <p>I am looking to transition into web development having spent the previous five years in film production and real estate. 
          In my prior experience, the most important skill I learned was how to develop solid relationships with my co-workers. 
          I have had to learn something new everywhere I have worked, and my enthusiasm to learn and collaborate with others 
          has left me with great relationships with my previous employers. 
          I believe the skills I have learned will carry over and allow me to be a successful web developer. 
          And if you want fun, I can talk movies all day long!</p>
        </div>
        <div className='skills'>
          <h3 className='skills-header'>Skills</h3>
           <div className='skill-names'>
             <div className='front-end'>
             <h4 className='skill-type'>Front-End</h4> 
              <ul className='front-end-list'>
                <li className='html'>HTML</li>
                <li className='css'>CSS</li>
                <li className='js'>Javascript</li>
                <li className='react'>React</li>
                </ul>
              </div>
             <div className='back-end'>
             <h4 className='skill-type'>Back-End</h4>  
              <ul className='back-end-list'>
                <li className='node'>Node.js</li>
                <li className='express'>Express</li>
                <li className='sql'>PostgreSQL</li>
                <li className='rails'>Ruby on Rails</li>
              </ul>
             </div>    
           </div>   
          </div>  
        </div>   
    )
}

export default Home;