import React from 'react';

const Contact = () => {
    return (
        <div className='contact-info'>
            <h2>Contact Me Here!</h2>
            <i className="fa fa-mobile fa-3x" aria-hidden="true"></i><h3>651-767-2285</h3>
            <i className="fa fa-envelope fa-2x" aria-hidden="true"></i><h3>jmeltzer33@gmail.com</h3>
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i><a className='contact-link' href='https://www.linkedin.com/in/jacob-meltzer/'><h3>LinkedIn</h3></a>
            <i className="fa fa-github-square fa-2x" aria-hidden="true"></i><a className='contact-link' href='https://github.com/jakemeltzer333'><h3>GitHub</h3></a>
        </div>
    )
}

export default Contact;