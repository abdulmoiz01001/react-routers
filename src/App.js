import logo from './logo.svg';
import './App.css';

import Header from './Components/Header.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Home from './Components/Home.jsx'
import Services from './Components/Services'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
     <Header/>
    <Routes>
    <Route index element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

     
    </Router>
  )
}

export default App;
