import React from 'react';

function Learn() {

    return (
        <div className="learn-wrapper">
            <p className="learn-text">
                Want to learn more about solar energy and how much money it could save you? Have a look at the slideshow below!
            </p>

            <div className="learn-slideshow-wrapper">
                <iframe className="learn-slideshow" src="https://docs.google.com/presentation/d/e/2PACX-1vQMLur8A9e3cgJYGRK8-QWHPerU5Z3O86i7OglY_mUKTtYzLzxjQdxFi7Nmo55EMrAHMMmz5x6bVqey/embed?start=false&loop=true&delayms=60000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div>
        </div>
    );
}

export default Learn;