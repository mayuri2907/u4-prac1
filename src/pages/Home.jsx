function Home() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Home Page</h2>
      <p className="text-gray-600 leading-relaxed">
        Welcome to our website! This is the home page.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Click on the navigation links above to visit the About and Contact pages. Notice that the page navigates instantly without reloading or refreshing the browser.
      </p>
    </div>
  );
}

export default Home;
