import React from 'react';

import bttf from '../images/bttf-trivia-title-screen.png';
import gotForDummies from '../images/gotfordummies.png';
import linkGA from '../images/linkGAhomepage.png';
import movieSearch from '../images/moviesearch.png';

const Projects = () => {
    return (
        <div className='projects container'>
            <div className='project-1'>
                <a href='http://back-to-the-future-trivia.bitballoon.com/'><img src={bttf}/></a>
                <i class="fa fa-github-square fa-lg" aria-hidden="true"><a href='https://github.com/jakemeltzer333/Back-To-The-Future-Trivia'></a></i>
            </div>
            <div className='project-2'>
                <a href='http://gameofthronesfordummies.herokuapp.com/'><img src={gotForDummies}/></a>
            </div>
            <div className='project-3'>
                <img src={linkGA}/>
            </div>
            <div className='project-4'>
                <img src={movieSearch}/>
            </div>    
        </div>    
    )
}

export default Projects;