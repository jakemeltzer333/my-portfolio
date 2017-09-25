import React from 'react';

const Interests = () => {
    return (
        <div className='interests-container'>
            <h3>Web Development is Great! But I Have Other Passions as Well! Here are Some Lists of My Favorite Things!</h3>
            <div className='lists'>
            <ul>
                <h4>Favorite Movies of 2017 (so far)</h4>
                <li>Dunkirk</li>
                <li>Get Out</li>
                <li>John Wick: Chapter 2</li>
                <li>The Big Sick</li>
                <li>Okja</li>    
            </ul>

            <ul>
                <h4>Favorite TV Shows of 2017 (so far)</h4>
                <li>The Leftovers</li>
                <li>Rick and Morty</li>
                <li>Better Call Saul</li>
                <li>The Young Pope</li>
                <li>Master of None</li>
            </ul>

            <ul>
                <h4>Favorite Foods</h4>
                <li>Ben and Jerry's Ice Cream</li>
                <li>Sausage Pizza</li>
                <li>Quaker Oat Squares</li>
                <li>My Aunt's Brownies</li>
                <li>BBQ Brisket</li>
            </ul>

            <ul>
                <h4>Favorite Sports Teams</h4>
                <li>Minnesota Vikings</li>
                <li>Minnesota Timberwolves</li>
                <li>Arsenal FC</li>
                <h4>Least Favorite Sports Teams</h4>
                <li>Green Bay Packers</li>
                <li>New York Yankees</li>
                <li>New England Patriots</li>
                <li>Dallas Cowboys</li>
                <li>Los Angeles Lakers</li>
            </ul>        
            </div>    
        </div>    
    )
}

export default Interests;