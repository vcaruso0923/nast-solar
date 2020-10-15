import React from 'react';

function Home() {

    return (
        <div className="about-section">
            {/* <img
                src={require(`../../assets/images/pro.jpg`)}
                alt='Vincent Caruso on the beach'
                key='pro-pic'
            /> */}
            <div id="bio-wrapper">
                <p id="bio-line-1">Hello, I'm Vince!</p>
                <p className="bio-body">I'm a full-stack web developer.</p>
                <p className="bio-body">Have a look at some projects I've worked on.</p>
                <p className="bio-body">Feel free to reach out!</p>
            </div>
        </div>
    );
}

export default Home;