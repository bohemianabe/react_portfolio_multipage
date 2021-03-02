// import pages
import AboutMePage from './pages/AboutMePage'
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'
// import PortfolioPage2 from './pages/PortfolioPage2'
import Nav from './components/Nav'
import Footer from './components/Footer'
import PortfolioDetails from './pages/PortfolioDetails'
// global style
import GlobalStyle from './components/GlobalStyle'
// router
import {Switch, Route, useLocation} from 'react-router-dom'
// animation for pages
import {AnimatePresence} from 'framer-motion'
// formspree
import {FormspreeProvider } from '@formspree/react'


function App() {
  // use useLocation to get your key, and location to tell framer motion where it is, so it can animate
  const location = useLocation()
  return (
    <FormspreeProvider project="1594843301763088239"> 
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* this attribute to keep the animations from acting at once */}
      <AnimatePresence exitBeforeEnter> 
        {/* these attributes are for framer motion references */}
      <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={AboutMePage} />
      <Route exact path="/portfolio">
        <PortfolioPage />
      </Route>
      <Route exact path='/portfolio/:id' component={PortfolioDetails} />
      <Route exact path="/contact" component={ContactPage} />
      </Switch>
      </AnimatePresence>
      <Footer />
    </div>
    </FormspreeProvider>
  );
}

export default App;
