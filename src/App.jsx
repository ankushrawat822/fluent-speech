import React from "react"
import {Router , Route , Routes} from 'react-router-dom'

// importing components and pages
import Navbar from "./components/common/Navbar"
import Home from './components/pages/Home'
import Contact from "./components/pages/Contact"
import Partner from "./components/pages/Partner"
import Career from "./components/pages/Career"
import EmergingTechnologies from './components/pages/solution/EmergingTechnologies'
import VirtutalAndAgumented from "./components/pages/solution/VirtutalAndAgumented"
import CustomApplication from "./components/pages/solution/CustomApplication"
import EnterpriseApplication from './components/pages/solution/EnterpriseApplication'
import BusinessIntelligence from "./components/pages/solution/BusinessIntelligence"


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
        <Route path="/emerging-tehcnologies" element={<EmergingTechnologies></EmergingTechnologies>} />
        <Route path="/virtual-and-agumented-reality" element={<VirtutalAndAgumented></VirtutalAndAgumented>} />
        <Route path="/custom-application" element={<CustomApplication></CustomApplication>} />
        <Route path="/enterprise-application" element={<EnterpriseApplication></EnterpriseApplication>} />
        <Route path="/business-intelligence" element={<BusinessIntelligence></BusinessIntelligence>} />
        <Route path="*" element={<Error />} />
    </Routes>
    <Footer></Footer>
   </>
  )
}

export default App
