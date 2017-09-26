import React from 'react';

import bttf from '../images/bttf-trivia-title-screen.png';
import gotForDummies from '../images/gotcharacterlist.png';
import linkGA from '../images/linkGAhomepage.png';
import movieSearch from '../images/moviesearch.png';

const Projects = () => {
    return (
        <div className='projects container'>
            <div className='project-1'>
                <h3 className='project-name'>Back to the Future Trivia</h3>
                <a href='http://back-to-the-future-trivia.bitballoon.com/'><div className='project-image' style={{backgroundImage: `url(${bttf})`}}>
                </div></a>
                <a className='project-github-link' href='https://github.com/jakemeltzer333/Back-To-The-Future-Trivia'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
            </div>
            <div className='project-2'>
                <h3 className='project-name'>Game of Thrones for Dummies</h3>
                <a href='http://gameofthronesfordummies.herokuapp.com/'><div className='project-image' style={{backgroundImage: `url(${gotForDummies})`}}>
                </div></a>
                <a className='project-github-link' href='https://github.com/jakemeltzer333/Game-of-Thrones-for-Dummies'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
            </div>
            <div className='project-3'>
                <h3 className='project-name'>LinkGA</h3>
                <a href='https://vast-temple-53081.herokuapp.com/'><div className='project-image' style={{backgroundImage: `url(${linkGA})`}}>
                </div></a>
                <a className='project-github-link' href='https://github.com/jakemeltzer333/GA-Networking-App'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
            </div>
            <div className='project-4'>
                <h3 className='project-name'>SeenIt?</h3>
                <a href='https://have-i-seen-it.herokuapp.com/'><div className='project-image' style={{backgroundImage: `url(${movieSearch}`}}>
                </div></a>
                <a className='project-github-link' href='https://github.com/jakemeltzer333/HaveISeenThis'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
            </div>    
        </div>    
    )
}

export default Projects;