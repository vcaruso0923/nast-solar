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
    pageName = "Nast Solar"
  } else if (portfolioSelected) {
    currentPage = <Portfolio></Portfolio>
    pageName = "Nast Solar - Solar Projects"
  } else if (contactSelected) {
    currentPage = <Contact></Contact>
    pageName = "Nast Solar - Go Solar!"
  } else if (aboutSelected) {
    currentPage = <About></About>
    pageName = "Nast Solar - About Me"
  } else if (learnSelected) {
    currentPage = <Learn></Learn>
    pageName = "Nast Solar - Learn About Solar"
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
