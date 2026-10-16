import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
        {/* Navigation Bar */}
        <Navbar />

        {/* Practical Sub-header */}
        <div className="bg-white border-b border-slate-200 py-3 px-4 shadow-xs">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-slate-600 gap-1">
            <div>
              <span className="font-semibold text-slate-800">Practical 1:</span> React Router Navigation (BrowserRouter, Route, Link)
            </div>
            <div className="text-emerald-700 font-medium">
              ● Unit 4 – Client-Side Routing
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
          React Practical 1 | Created for Lab Submission
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
