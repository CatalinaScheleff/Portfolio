import { BrowserRouter, Routes, Route} from "react-router-dom";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BackgroundCon, ContentCon } from "./components/AppElements";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Home } from "./pages/home";
import { Work } from "./pages/work";


function App() {

  return (
    <>
      <BrowserRouter>
      <BackgroundCon id="BackgroundCon">
        <Navbar/>
        <ContentCon id="ContentCon">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/work" element={<Work/>}/>
          </Routes>

        </ContentCon>
       <Footer/>
      </BackgroundCon>
      </BrowserRouter>
    </>
  )
}

export default App
