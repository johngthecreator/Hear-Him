import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Study from './pages/Study';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Study />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
