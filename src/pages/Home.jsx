import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full mb-3 border border-emerald-200">
          Client-Side Routing
        </span>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
          Welcome to the Home Page
        </h1>
        <p className="mt-3 text-slate-600 leading-relaxed max-w-2xl">
          This React application uses <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono font-semibold">BrowserRouter</code>,{' '}
          <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono font-semibold">Route</code>, and{' '}
          <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono font-semibold">Link</code> to navigate seamlessly between pages without full page reload.
        </p>

        <div className="mt-6 flex space-x-3">
          <Link
            to="/about"
            className="px-5 py-2.5 bg-emerald-700 text-white rounded-lg text-sm font-medium hover:bg-emerald-800 transition-colors shadow-sm"
          >
            Learn About Us →
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors border border-slate-300"
          >
            Contact Support
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-2">1. No Full Page Reload</h3>
          <p className="text-sm text-slate-600 leading-normal">
            Traditional anchor tags cause browser refresh. React Router updates only the required components in the DOM.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-2">2. Single Page App (SPA)</h3>
          <p className="text-sm text-slate-600 leading-normal">
            The browser loads index.html once, and client-side JavaScript handles state and path changes instantly.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-2">3. Browser History Kept</h3>
          <p className="text-sm text-slate-600 leading-normal">
            The browser back and forward buttons work naturally because the HTML5 History API is preserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
