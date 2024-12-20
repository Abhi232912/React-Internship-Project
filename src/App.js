import React from "react";
import About from './Pages/About';
import Benefits from './Pages/Benefits';
import Courses from './Pages/Courses';
import FAQs from './Pages/FAQs';
import Home from './Pages/Home';
import Services from './Pages/Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from "./Pages/Contact";


function App() {
  return (

<BrowserRouter>
<Routes >
<Route path="/" element={<Home />} />
<Route path="/Services" element={<Services/>} />
<Route path="/Benefits" element={<Benefits />} />
<Route path="/About" element={<About />} />
<Route path="/Courses" element={<Courses/>} />
<Route path="/FAQs" element={<FAQs />} />
<Route path="/Contact" element={<Contact />} />
</Routes>
</BrowserRouter>

  );
}

export default App;
