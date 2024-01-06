import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import VechicleListing from './Pages/VechicleListing'
import DealerLocation from './Pages/DealerLocation'
import GetApp from './Pages/GetApp'
import OurNews from './Pages/OurNews'
import Contact from './Pages/Contact'
import "./index.css"
import LogInSection from './Pages/LogInSection'
import SignUp from './Pages/SignUp'

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes >
     <Route  path='/' element={<Layout/>}> 
     <Route path='/' element={<Home/>}/>
     <Route path='/vechileListing' element={<VechicleListing/>} />
     <Route path='/dealerLocation' element={<DealerLocation />} />
     <Route path='/getApp' element={<GetApp />} />
     <Route path='/ourNews' element={<OurNews />} />
     <Route path='/contact' element={<Contact />} />
     <Route path='/loginUser' element={<LogInSection />} />
     <Route path='/signup' element={<SignUp />} />
     </Route> 
     </Routes>
     </BrowserRouter> 
   
    </>
  )
}

export default App

