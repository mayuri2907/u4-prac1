import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  // Helper function to highlight active link
  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return isActive
      ? 'px-4 py-2 rounded-md text-sm font-medium bg-emerald-700 text-white'
      : 'px-4 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors';
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-slate-800">
              StudentPortal<span className="text-emerald-700">.</span>
            </span>
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">
              U4-PRAC 1
            </span>
          </div>

          <div className="flex space-x-2">
            <Link to="/" className={getLinkClass('/')}>
              Home
            </Link>
            <Link to="/about" className={getLinkClass('/about')}>
              About
            </Link>
            <Link to="/contact" className={getLinkClass('/contact')}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
