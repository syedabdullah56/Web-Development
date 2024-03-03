import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'


function App() {


  return (
    <>
      <Navbar/>
      <div className="cardstime">
      <Card title="Card 1" desc="This is card 1" />
      <Card title="Card 2" desc="This is card 2"/>
      <Card title="Card 3" desc="This is card 3"/>
      <Card title="Card 4" desc="This is card 4"/>
      </div>
      
         
      <Footer/>
    </>
  )
}

export default App
