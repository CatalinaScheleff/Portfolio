import { BrowserRouter, Routes, Route} from "react-router-dom";

import { BackgroundCon, ContentCon } from "./components/AppElements";

import { Footer } from "./components/footer/footer";
import { Home } from "./pages/home";
import { Work } from "./pages/work";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Certification } from "./pages/certification";
import { Navbar } from "./components/navbar/navbar";


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
            <Route path="/about" element={<About/>}/>
            <Route path="/certification" element={<Certification/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </ContentCon>
       <Footer/>
      </BackgroundCon>
      </BrowserRouter>
    </>
  )
}

export default App
