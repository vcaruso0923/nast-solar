import React from 'react';

function Nav(props) {
    const {
        homeSelected,
        portfolioSelected,
        contactSelected,
        aboutSelected,
        learnSelected,
        setHomeSelected,
        setPortfolioSelected,
        setContactSelected,
        setAboutSelected,
        setLearnSelected,
    } = props;

    return (
        <header>
            <h2>
                Nast Solar
            </h2>
            <nav>
                <ul>
                <li className={`${homeSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setHomeSelected(true);
                            setAboutSelected(false);
                            setPortfolioSelected(false);
                            setLearnSelected(false);
                            setContactSelected(false);
                        }}>Home</span>
                    </li>
                <li className={`${aboutSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setHomeSelected(false);
                            setAboutSelected(true);
                            setPortfolioSelected(false);
                            setLearnSelected(false);
                            setContactSelected(false);
                        }}>About Me</span>
                    </li>
                    <li className={`${portfolioSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setHomeSelected(false);
                            setAboutSelected(false);
                            setPortfolioSelected(true);
                            setLearnSelected(false);
                            setContactSelected(false);
                        }}>Solar Projects</span>
                    </li>
                    <li className={`${learnSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setHomeSelected(false);
                            setAboutSelected(false);
                            setPortfolioSelected(false);
                            setLearnSelected(true);
                            setContactSelected(false);
                        }}>Learn About Solar</span>
                    </li>
                    <li className={`${contactSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setHomeSelected(false);
                            setAboutSelected(false);
                            setPortfolioSelected(false);
                            setLearnSelected(false);
                            setContactSelected(true);
                        }}>Go Solar!</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;