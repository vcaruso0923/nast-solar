import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Learn from './components/Learn';



function App() {

  const [homeSelected, setHomeSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [learnSelected, setLearnSelected] = useState(false);

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
  } else if (aboutSelected) {
    currentPage = <About></About>
    pageName = "About"
  } else if (learnSelected) {
    currentPage = <Learn></Learn>
    pageName = "Learn"
  }

  useEffect(() => { document.title = pageName; })

  return (
    <div>
      <>
        <Nav
          homeSelected={homeSelected}
          portfolioSelected={portfolioSelected}
          contactSelected={contactSelected}
          aboutSelected={aboutSelected}
          learnSelected={learnSelected}
          setHomeSelected={setHomeSelected}
          setPortfolioSelected={setPortfolioSelected}
          setContactSelected={setContactSelected}
          setAboutSelected={setAboutSelected}
          setLearnSelected={setLearnSelected}
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
