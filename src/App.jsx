import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Startpage from './components/Startpage'
import MortageCalculator from './components/MortageCalculator'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/calci' element={<MortageCalculator/>}/>
        <Route path='/page' element={<Startpage/>}/>
      </Routes>
    </Router>
  )
}

export default App