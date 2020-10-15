import React from 'react';

function Resume() {

    return (
        <div id="resume-section">
            <h2 id="pro-header" className="custom-h2">Proficiencies</h2>
            <div id="pro-divider"></div>
            <div id="proficiencies-container">
                <div>
                    <h3 className="custom-h3">Front End:</h3>
                    <ul className="proficiencies-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Responsive Design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div>
                    <h3 className="custom-h3">Back End:</h3>
                    <ul className="proficiencies-list">
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL (Sequelize)</li>
                        <li>MongoDB</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
            <div id="resume-link-container">
                <a id="resume-link" className="custom-button" href="VincentCarusoResume.docx" download="Vincent Caruso's Resume.docx">Download My Resume!</a>
            </div>
        </div >
    );
}

export default Resume;