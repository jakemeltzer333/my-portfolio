import React from 'react';

import photo from '../images/linkedinphoto.jpg';

const Home = () => {
    return (
      <div className='home-container'>  
        <div className='profile-photo' style={{backgroundImage: `url(${photo})`}}>
        </div>  
        <div className='summary'>
        <p>I am looking to transition into web development having spent the previous five years in film production and real estate. 
          In my prior experience, the most important skill I learned was how to develop solid relationships with my co-workers. 
          I have had to learn something new everywhere I have worked, and my enthusiasm to learn and collaborate with others 
          has left me with great relationships with my previous employers. 
          I believe the skills I have learned will carry over and allow me to be a successful web developer. 
          And if you want fun, I can talk movies all day long!</p>
        </div>
      </div>  
    )
}

export default Home;