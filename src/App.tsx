
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TsbAltFarm from './pages/TsbAltFarm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tsbaltfarm" element={<TsbAltFarm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
