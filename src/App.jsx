import React from 'react';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

function App() {
  const slides = [
    {
      bg: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1938',
      title: 'Welcome to Obazz FC',
      subtitle: 'Pride. Passion. Performance.',
      link: '#matches',
      button: 'View Fixtures'
    },
    {
      bg: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b',
      title: 'Feel the Thrill of the Game',
      subtitle: 'Join our journey to glory',
      link: '#news',
      button: 'Latest News'
    },
    {
      bg: 'https://images.unsplash.com/photo-1597643253822-c0d93de5c00a',
      title: 'Get Your Official Kit',
      subtitle: 'Shop the latest Obazz merch',
      link: '#store',
      button: 'Shop Now'
    }
  ];
  return (
    <>
      {/* Top Utility Nav */}
    <div className="bg-white text-xs text-gray-700 px-6 py-2 flex justify-between items-center border-b">
      <div className="flex gap-6">
        <a href="#" className="hover:underline">VENUE</a>
        <a href="#" className="hover:underline">OBAZZ FOUNDATION</a>
        <a href="#" className="hover:underline">NO TO HATE</a>
      </div>
      <div className="flex gap-4">
        <a href="#" className="hover:underline">LOGIN</a>
        <a href="#" className="hover:underline">REGISTER</a>
      </div>
    </div>

    {/* Main Navbar */}
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src="/obazz-logo.png" alt="Obazz FC" className="w-12 h-12 object-contain" />
        <span className="font-bold text-blue-900 text-xl">OBAZZ FC</span>
      </div>

      {/* Main Menu */}
      <ul className="hidden md:flex gap-8 font-semibold text-blue-900 text-sm">
        <li className="hover:underline"><a href="#">LATEST</a></li>
        <li className="hover:underline"><a href="#">WATCH</a></li>
        <li className="group relative">
          <a href="#" className="hover:underline">MEN'S TEAM</a>
          {/* Dropdown */}
          <ul className="absolute left-0 mt-2 w-64 bg-blue-900 text-white p-4 rounded shadow-lg hidden group-hover:block">
            <li className="mb-2"><a href="#" className="hover:underline">Fixtures / Results / Tables</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Buy Tickets</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Latest News</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Player & Staff Profiles</a></li>
            <li><a href="#" className="hover:underline">The Academy</a></li>
          </ul>
        </li>
        <li className="hover:underline"><a href="#">WOMEN'S TEAM</a></li>
        <li className="hover:underline"><a href="#">TICKETS & HOSPITALITY</a></li>
        <li className="hover:underline"><a href="#">SHOP</a></li>
      </ul>

      {/* Hamburger for mobile */}
      <button className="md:hidden text-blue-900">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>

      {/* HERO SLIDER SECTION */}
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
                <div className="z-10 text-white">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-lg mb-6">{slide.subtitle}</p>
                  <a
                    href={slide.link}
                    className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold rounded-lg transition"
                  >
                    {slide.button}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Arrows inside boxes */}
        <div className="swiper-button-prev !bg-white !text-blue-900 !w-10 !h-10 rounded-full shadow-lg flex items-center justify-center !left-4 z-10"></div>
        <div className="swiper-button-next !bg-white !text-blue-900 !w-10 !h-10 rounded-full shadow-lg flex items-center justify-center !right-4 z-10"></div>
      </Swiper>
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
           {/* News Section */}
<section id="news" className="bg-blue-900 text-white py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10 text-yellow-400">Latest News</h2>

    <div className="grid gap-8 md:grid-cols-3">
      {[
        {
          title: "Obazz FC Secures Comeback Win!",
          date: "June 18, 2025",
          image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=700&q=80"
        },
        {
          title: "Captain Signs Contract Extension",
          date: "June 12, 2025",
          image: "https://images.unsplash.com/photo-1605201104351-6b8e0b81db4d?auto=format&fit=crop&w=700&q=80"
        },
        {
          title: "Training Gallery: Focus Ahead of Derby",
          date: "June 10, 2025",
          image: "https://images.unsplash.com/photo-1593082191862-1232ef58f8c8?auto=format&fit=crop&w=700&q=80"
        }
      ].map((news, idx) => (
        <div key={idx} className="bg-white text-blue-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
          <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-sm text-gray-500">{news.date}</p>
            <h3 className="text-lg font-bold mt-2 mb-2">{news.title}</h3>
            <a href="#" className="text-sm text-yellow-500 hover:underline">Read more →</a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
          {/* Video Highlights Section */}
<section id="videos" className="bg-white text-blue-900 py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10">Video Highlights</h2>
    <div className="grid md:grid-cols-2 gap-8">
     <iframe
        className="w-full aspect-video rounded shadow"
        src="https://www.youtube.com/embed/p5CjaRIMrfs
"
        title="Highlight 2"
        allowFullScreen
      ></iframe>
      <iframe
        className="w-full aspect-video rounded shadow"
        src="https://www.youtube.com/embed/p5CjaRIMrfs"
        title="Highlight 2"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

{/* Team / Featured Players Section */}
<section id="team" className="bg-blue-100 text-blue-900 py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10">Meet the Team</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        { name: "Oba Skillz", position: "Forward", image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { name: "Jay Smart", position: "Midfielder", image: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Zee Blocker", position: "Goalkeeper", image: "https://randomuser.me/api/portraits/men/45.jpg" }
      ].map((player, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow hover:shadow-md text-center p-4">
          <img src={player.image} alt={player.name} className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
          <h3 className="text-xl font-bold">{player.name}</h3>
          <p className="text-sm text-gray-600">{player.position}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Store Promo Section */}
<section id="store" className="bg-yellow-400 text-blue-900 py-20 px-6 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-4">Official Obazz FC Store</h2>
    <p className="text-lg mb-6">Get the latest kits, scarves, and fan gear from the official club store.</p>
    <a href="#" className="inline-block bg-blue-900 text-yellow-400 px-6 py-3 rounded text-lg font-semibold hover:bg-blue-800 transition">Shop Now</a>
  </div>
</section>


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
    </>
  );
}

export default App;
