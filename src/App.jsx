import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/home'
import About from './components/about'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> 
      <Footer/>
    </>
  )
}

export default App
