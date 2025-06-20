import React from 'react';
import './index.css';

function App() {
  return (
    <div className="bg-blue-900 text-white min-h-screen">
      {/* HERO SECTION */}
      <header className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4 drop-shadow-lg">Welcome to Obazz FC</h1>
          <p className="text-lg md:text-2xl mb-6">Pride. Passion. Performance.</p>
          <a href="#matches" className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold rounded-lg transition">View Fixtures</a>
        </div>
      </header>
    </div>
  );
}

export default App;
