function About() {
  return (
    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
      <div>
        <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full mb-2 border border-amber-200">
          Practical Overview
        </span>
        <h1 className="text-3xl font-bold text-slate-800">About This Application</h1>
        <p className="mt-2 text-slate-600">
          This project demonstrates the core concepts of client-side routing in React 19 using React Router.
        </p>
      </div>

      <div className="border-t border-slate-200 pt-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-800">Core Components Explained</h2>
        <div className="space-y-3">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="font-semibold text-slate-800 font-mono text-sm">&lt;BrowserRouter&gt;</h3>
            <p className="text-sm text-slate-600 mt-1">
              Provides the routing context and uses the standard HTML5 history API (pushState, replaceState) to keep the UI in sync with the URL.
            </p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="font-semibold text-slate-800 font-mono text-sm">&lt;Routes&gt; and &lt;Route&gt;</h3>
            <p className="text-sm text-slate-600 mt-1">
              Matches the current browser URL against the path attribute of child Route components and selectively mounts the matching element.
            </p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="font-semibold text-slate-800 font-mono text-sm">&lt;Link&gt;</h3>
            <p className="text-sm text-slate-600 mt-1">
              Replaces the traditional HTML &lt;a&gt; tag. It prevents default browser reload behavior and navigates in-memory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
