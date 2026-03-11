import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Games from "./components/Games.jsx";
import Music from "./components/Music.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Nav />
    </BrowserRouter>
    <Header />
    <Games />
    <Music  />
    <Footer />
  </StrictMode>,
)
