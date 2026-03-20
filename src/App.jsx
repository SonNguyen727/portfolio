import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Games from './pages/Games.jsx';
import Music from './pages/Music.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <MainLayout>
          <Home />
        </MainLayout>
      } />
      <Route path="/games" element={
        <MainLayout>
          <Games />
        </MainLayout>
      } />
      <Route path="/music" element={
        <MainLayout>
          <Music />
        </MainLayout>
      } />
      <Route path="/contact" element={
        <MainLayout>
          <Contact />
        </MainLayout>
      } />
    </Routes>
  );
}

export default App;
