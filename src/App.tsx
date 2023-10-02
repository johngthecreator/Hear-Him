import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Study from './pages/Study';
import Home from './pages/Home';
import About from './pages/About';
import Changelog from './pages/Changelog';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/about" element={<About />} />
        <Route path="/changelog" element={<Changelog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
