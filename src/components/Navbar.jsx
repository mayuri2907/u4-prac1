import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="text-lg font-bold text-gray-800">React Router Demo</h1>
        <div className="flex space-x-4">
          <Link
            to="/"
            className={`px-3 py-1.5 rounded text-sm font-medium ${
              location.pathname === '/'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`px-3 py-1.5 rounded text-sm font-medium ${
              location.pathname === '/about'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`px-3 py-1.5 rounded text-sm font-medium ${
              location.pathname === '/contact'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
