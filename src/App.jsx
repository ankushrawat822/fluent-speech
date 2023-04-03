import React from "react"
import {Router , Route , Routes} from 'react-router-dom'

// importing components and pages
import Navbar from "./components/common/Navbar"
import Home from './components/pages/Home'
import Contact from "./components/pages/Contact"
import Partner from "./components/pages/Partner"
import Career from "./components/pages/Career"

import Footer from './components/common/Footer'
function App() {
  

  return (
   <>

   <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
    
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/partner" element={<Partner></Partner>} />
        <Route path="/career" element={<Career></Career>} />
        <Route path="*" element={<Error />} />
    </Routes>
    <Footer></Footer>
   </>
  )
}

export default App
