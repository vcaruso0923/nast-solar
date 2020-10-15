import React from 'react';

function Nav(props) {
    const {
        homeSelected,
        portfolioSelected,
        contactSelected,
        resumeSelected,
        setHomeSelected,
        setPortfolioSelected,
        setContactSelected,
        setResumeSelected,
    } = props;

    return (
        <header>
            <h2>
                Vincent Caruso
            </h2>
            <nav>
                <ul>
                <li className={`${homeSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setHomeSelected(true);
                            setPortfolioSelected(false);
                            setContactSelected(false);
                            setResumeSelected(false);
                        }}>Home</span>
                    </li>
                    <li className={`${portfolioSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setHomeSelected(false);
                            setPortfolioSelected(true);
                            setContactSelected(false);
                            setResumeSelected(false);
                        }}>Portfolio</span>
                    </li>
                    <li className={`${contactSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setHomeSelected(false);
                            setPortfolioSelected(false);
                            setContactSelected(true);
                            setResumeSelected(false);
                        }}>Contact Me</span>
                    </li>
                    <li className={`${resumeSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setHomeSelected(false);
                            setPortfolioSelected(false);
                            setContactSelected(false);
                            setResumeSelected(true);
                        }}>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;