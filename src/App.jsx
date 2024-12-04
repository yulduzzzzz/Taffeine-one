import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
// import Events from './components/pages/events/Events'

import Navbar from './components/layouts/navbar/Navbar'
import Footer from './components/layouts/footer/Footer'


// import Product from './components/pages/product/Product'
// import Contact from './components/pages/contact/Contact'
function App() {
  return (
    <div className='wrapper' >


<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
  {/* <Route path='/Events' element={<Events/>} />


  <Route path='/Product' element={<Product/>} />

  <Route path='/Contact' element={<Contact/>} /> */}
</Routes>
<Footer/>
</BrowserRouter>


    </div>
  )
}

export default App