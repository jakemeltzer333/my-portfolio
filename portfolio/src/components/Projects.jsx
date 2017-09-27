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
                <p className='project-blurb'>Trivia game built almost entirely in Javascript/JQuery consisting of 20 multiple choice questions of varying difficulty from all three films in the Back to the Future trilogy.</p>
                <a className='project-github-link' href='https://github.com/jakemeltzer333/Back-To-The-Future-Trivia'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
            </div>
            <div className='project-2'>
                <h3 className='project-name'>Game of Thrones for Dummies</h3>
                <a href='http://gameofthronesfordummies.herokuapp.com/'><div className='project-image' style={{backgroundImage: `url(${gotForDummies})`}}>
                </div></a>
                <p className='project-blurb'>Allows casual viewers of Game of Thrones to be able to type in a character name and retrieve info about them. This app was built primarily in Express and used PostgreSQL to store information in the server-side database. 
                    The information is retrieved using the API of Ice and Fire.</p>
                <a className='project-github-link' href='https://github.com/jakemeltzer333/Game-of-Thrones-for-Dummies'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
            </div>
            <div className='project-3'>
                <h3 className='project-name'>LinkGA</h3>
                <a href='https://vast-temple-53081.herokuapp.com/'><div className='project-image' style={{backgroundImage: `url(${linkGA})`}}>
                </div></a>
                <p className='project-blurb'>Allows GA students to link directly with other users and reach out to them in order to expand their network and collaborate. 
                    I worked on this project with 3 of my fellow students. We built this project using React for the front-end and Express and PostgreSQL for the back-end. 
                    I primarily contributed to the back-end portion of this project and was responsible for incorporating the Meetup API to display tech-related events in the area.</p>
                <a className='project-github-link' href='https://github.com/jakemeltzer333/GA-Networking-App'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
            </div>
            <div className='project-4'>
                <h3 className='project-name'>SeenIt?</h3>
                <a href='https://have-i-seen-it.herokuapp.com/'><div className='project-image' style={{backgroundImage: `url(${movieSearch}`}}>
                </div></a>
                <p className='project-blurb'>A visually dynamic method of keeping track of movies one has seen, with the ability to also pull up information about specific movies with one click. 
                    This app was built with Ruby on Rails for the backend and React for the front end. For the movie information, I used The Movie Database API.</p>
                <a className='project-github-link' href='https://github.com/jakemeltzer333/HaveISeenThis'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
            </div>    
        </div>    
    )
}

export default Projects;