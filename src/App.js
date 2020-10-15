import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';



function App() {

  const [homeSelected, setHomeSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  var currentPage;
  var pageName;

  if (homeSelected) {
    currentPage = <Home></Home>
    pageName = "Vincent Caruso"
  } else if (portfolioSelected) {
    currentPage = <Portfolio></Portfolio>
    pageName = "Portfolio"
  } else if (contactSelected) {
    currentPage = <Contact></Contact>
    pageName = "Contact"
  } else if (resumeSelected) {
    currentPage = <Resume></Resume>
    pageName = "Resume"
  }

  useEffect(() => { document.title = pageName; })

  return (
    <div>
      <>
        <Nav
          homeSelected={homeSelected}
          portfolioSelected={portfolioSelected}
          contactSelected={contactSelected}
          resumeSelected={resumeSelected}
          setHomeSelected={setHomeSelected}
          setPortfolioSelected={setPortfolioSelected}
          setContactSelected={setContactSelected}
          setResumeSelected={setResumeSelected}
        ></Nav>
        <div className="content">
          {currentPage}
        </div>
        <Footer></Footer>
      </>
    </div>
  );
}

export default App;
