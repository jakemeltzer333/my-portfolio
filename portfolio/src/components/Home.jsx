import React from 'react';

import photo from '../images/linkedinphoto.jpg';

const Home = () => {
    return (
      <div className='home-container'>  
        <img src = {photo} alt='profile-photo'/>
        <div className='summary'>
        <p>I am an aspiring web developer who is looking to make a career change into an exciting field. 
        For many years, I had regretted not taking computer science courses in school, 
        knowing how pivotal that field would become to every facet of modern life. 
        Now, I have decided to pursue this path and am excited to seek these new opportunities!</p>
        </div>
      </div>  
    )
}

export default Home;