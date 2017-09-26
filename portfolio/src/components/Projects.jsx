import React from 'react';

import bttf from '../images/bttf-trivia-title-screen.png';
import gotForDummies from '../images/gotcharacterlist.png';
import linkGA from '../images/linkGAhomepage.png';
import movieSearch from '../images/moviesearch.png';

const Projects = () => {
    return (
        <div className='projects container'>
            <div className='project-1'>
                <h3>Back to the Future Trivia</h3>
                <a href='http://back-to-the-future-trivia.bitballoon.com/'><img className='bttf' src={bttf} alt='BTTF-Trivia'/></a><br/>
                <a href='https://github.com/jakemeltzer333/Back-To-The-Future-Trivia'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
            </div>
            <div className='project-2'>
            <h3>Game of Thrones for Dummies</h3>
                <a href='http://gameofthronesfordummies.herokuapp.com/'><img src={gotForDummies} alt='GOT-for-dummies'/></a><br/>
                <a href='https://github.com/jakemeltzer333/Game-of-Thrones-for-Dummies'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
            </div>
            <div className='project-3'>
            <h3>LinkGA</h3>
                <a href='https://vast-temple-53081.herokuapp.com/'><img src={linkGA} alt='linkGA'/></a><br/>
                <a href='https://github.com/jakemeltzer333/GA-Networking-App'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
            </div>
            <div className='project-4'>
            <h3>SeenIt?</h3>
                <a href='https://have-i-seen-it.herokuapp.com/'><img src={movieSearch} alt='SeenIt'/></a><br/>
                <a href='https://github.com/jakemeltzer333/HaveISeenThis'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
            </div>    
        </div>    
    )
}

export default Projects;