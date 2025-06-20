import React from 'react';
import './index.css';

function App() {
  return (
    <div className="bg-blue-900 text-white min-h-screen">
      {/* HERO SECTION */}
      <header className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603052877633-016e2291f7c3?auto=format&fit=crop&w=1500&q=80')" }}>
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
