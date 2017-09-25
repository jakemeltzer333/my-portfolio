import React from 'react';

import bttf from '../images/bttf-trivia-title-screen.png';
import gotForDummies from '../images/gotcharacterlist.png';
import linkGA from '../images/linkGAhomepage.png';
import movieSearch from '../images/moviesearch.png';

const Projects = () => {
    return (
        <div className='projects container'>
            <div className='project-1'>
                <a href='http://back-to-the-future-trivia.bitballoon.com/'><img src={bttf} alt='BTTF-Trivia'/></a>
                <a href='https://github.com/jakemeltzer333/Back-To-The-Future-Trivia'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
            </div>
            <div className='project-2'>
                <a href='http://gameofthronesfordummies.herokuapp.com/'><img src={gotForDummies} alt='GOT-for-dummies'/></a>
                <a href='https://github.com/jakemeltzer333/Game-of-Thrones-for-Dummies'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
            </div>
            <div className='project-3'>
                <a href='https://vast-temple-53081.herokuapp.com/'><img src={linkGA} alt='linkGA'/></a>
                <a href='https://github.com/jakemeltzer333/GA-Networking-App'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
            </div>
            <div className='project-4'>
                <a href='https://have-i-seen-it.herokuapp.com/'><img src={movieSearch} alt='SeenIt'/></a>
                <a href='https://github.com/jakemeltzer333/HaveISeenThis'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
            </div>    
        </div>    
    )
}

export default Projects;