import {  Route, Routes, } from 'react-router-dom';
import { Home } from './Component/Home';
import { About } from './Component/About';
import { Contact } from './Component/Contact';
import { Services } from './Component/Services';
import NavBar from './Items/NavBar';
import './App.css';
function App() {
  return (
    <body>
    <>
    <NavBar />

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </>
    </body>
  );
}

export default App