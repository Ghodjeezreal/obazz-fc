import React from 'react';
import './index.css';

function App() {
  return (
    <div className="bg-blue-900 text-white min-h-screen">
      {/* HERO SECTION */}
      <header
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/obazz-hero.jpg')", // Replace with your image if local
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4 drop-shadow-lg">
            Welcome to Obazz FC
          </h1>
          <p className="text-lg md:text-2xl mb-6">Pride. Passion. Performance.</p>
          <a
            href="#matches"
            className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold rounded-lg transition"
          >
            View Fixtures
          </a>
        </div>
      </header>

      {/* Match Center Section */}
      <section id="matches" className="bg-white text-blue-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Match Center</h2>

          {/* NEXT MATCH */}
          <div className="bg-blue-100 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center shadow-md mb-12">
            <div>
              <p className="uppercase text-sm font-semibold text-blue-600">Next Match</p>
              <h3 className="text-2xl font-bold mt-2">Obazz FC vs Thunder United</h3>
              <p className="text-gray-700 mt-1">Saturday, June 29 · 5:00 PM</p>
              <p className="text-gray-600 text-sm">Obazz Arena</p>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="#" className="px-5 py-2 bg-yellow-400 text-blue-900 font-semibold rounded hover:bg-yellow-500 transition">Get Tickets</a>
            </div>
          </div>

          {/* RECENT RESULTS */}
          <h3 className="text-xl font-bold mb-4">Recent Results</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { date: 'June 12', teams: 'Obazz FC 2 - 1 Blaze FC' },
              { date: 'June 6', teams: 'Eagle Town 0 - 0 Obazz FC' },
              { date: 'May 29', teams: 'Obazz FC 3 - 0 River Kings' },
            ].map((match, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-4 shadow hover:shadow-md transition">
                <p className="text-sm text-blue-500">{match.date}</p>
                <h4 className="text-lg font-semibold mt-1">{match.teams}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
