import React from 'react';

import photo from '../images/jakepic.jpg'

const About = () => {
    return (
        <div className='about-container'>
            <div className='zipline' style={{backgroundImage: `url(${photo})`}}>
            </div>    
            <h2 className='about-header'>About Jacob</h2>
            <p className='about-blurb'>I was born in Flemington, New Jersey and raised in St. Paul, Minnesota. I initially
                went to college to study journalism at the University of Missouri before transferring after
                two years back home and graduating from the University of Minnesota. I moved to New York
                City five years ago to pursue opportunities in the film industry and had a few jobs and internships
                before transitioning into the cutthroat world of New York City real estate. I worked for a small luxury firm
                in downtown Manhattan first as an agent in the field and then in an administrative role for two years before enrolling in 
                the Web Development Immersive program at General Assembly.
                <br/><br/>
                As demonstrated on my Interests page, I am passionate about many things and happy to
                talk your ear off about any of them! So far, I have incorporated those passions into my projects and would love 
                to keep doing that going forward! 
            </p>
        </div>    
    )
}

export default About;