function About() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">About Page</h2>
      <p className="text-gray-600 leading-relaxed">
        This application is created to demonstrate single-page navigation in React using React Router.
      </p>
      <div className="text-sm text-gray-700 space-y-2">
        <p><strong>BrowserRouter:</strong> Wraps the app and syncs UI with the URL.</p>
        <p><strong>Route:</strong> Renders a specific component based on current URL path.</p>
        <p><strong>Link:</strong> Allows navigating between different routes without page refresh.</p>
      </div>
    </div>
  );
}

export default About;
