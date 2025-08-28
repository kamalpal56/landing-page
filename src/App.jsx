import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HeroTrade from "./components/HeroTrade";
import Instruments from "./components/Instruments";
import HowItWorks from "./components/HowItWorks";
import TradingSection from "./components/TradingSection";
import TradingConditions from "./components/TradingConditions";
import WhyChoose from "./components/WhyChoose";
import DemoTrading from "./components/DemoTrading";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import Disclaimer from "./components/Disclaimer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Navbar />
         <HeroSection></HeroSection>
         <HeroTrade></HeroTrade>
         <Instruments />
         <HowItWorks/>
         <TradingSection/>
         <TradingConditions/>
         <WhyChoose />
         <DemoTrading/>
         <GetInTouch/>
         <Footer/>
         <Disclaimer></Disclaimer>
    </>
  )
}

export default App
