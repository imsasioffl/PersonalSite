import React from 'react'
import Header from  './components/Header/Header'
import NavBar from './components/Nav/NavBar'
import About from './components/about/About'
import Experience from './components/Experience/Experience'  
// import Services from './components/Services/Services'
import Portfoli from './components/Portfolio/Portfoli'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => (
  <>

    <Header       />
    <NavBar       />
    <About        />
    <Experience   />
    {/* <Services     />  */}
    <Portfoli     />
    <Contact      />
    <Footer       />

  </>
)

export default App