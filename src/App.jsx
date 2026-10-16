import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />

        <div className="max-w-4xl mx-auto p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800">Practical 1: React Router Navigation</h2>
            <p className="text-sm text-gray-500">Navigation using BrowserRouter, Route, and Link</p>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
