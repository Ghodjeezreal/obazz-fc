import React from 'react';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const slides = [
    {
      bg:'/slide1.jpg',
      title: 'Welcome to Obazz FC',
      subtitle: 'Pride. Passion. Performance.',
      link: '#matches',
      button: 'View Fixtures'
    },
    {
      bg: '/slide2.jpg',
      title: 'Feel the Thrill of the Game',
      subtitle: 'Join our journey to glory',
      link: '#news',
      button: 'Latest News'
    },
    {
      bg: 'https://images.unsplash.com/photo-1750279807548-5abb78c50683?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
        <div className="flex items-center gap-4">
          <img src="/obazz-logo.png" alt="Obazz FC" className="w-12 h-12 object-contain" />
          <span className="font-bold text-blue-900 text-xl">OBAZZ FC</span>
        </div>

        <ul className="hidden md:flex gap-8 font-semibold text-blue-900 text-sm">
          <li className="hover:underline"><a href="#">LATEST</a></li>
          <li className="hover:underline"><a href="#">WATCH</a></li>
          <li className="group relative">
            <a href="#" className="hover:underline">MEN'S TEAM</a>
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

        <button onClick={() => setMobileMenuOpen(true)} className="block md:hidden text-blue-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div onClick={() => setMobileMenuOpen(false)} className="absolute inset-0 backdrop-blur-md bg-black/30 transition-opacity duration-500" />
          <div className="ml-auto w-3/4 max-w-sm h-full bg-blue-900 text-white backdrop-blur-xl shadow-2xl transform translate-x-0 animate-slide-in p-6 flex flex-col space-y-6 z-50">
            <button onClick={() => setMobileMenuOpen(false)} className="text-right text-white text-2xl font-bold mb-4">✕</button>
            <a href="#" className="hover:underline text-lg">LATEST</a>
            <a href="#" className="hover:underline text-lg">WATCH</a>
            <a href="#" className="hover:underline text-lg">MEN'S TEAM</a>
            <a href="#" className="hover:underline text-lg">WOMEN'S TEAM</a>
            <a href="#" className="hover:underline text-lg">TICKETS</a>
            <a href="#" className="hover:underline text-lg">SHOP</a>
            <a href="#" className="hover:underline text-sm mt-auto">LOGIN / REGISTER</a>
          </div>
        </div>
      )}

      {/* HERO SLIDER SECTION */}
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        allowTouchMove={true}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        className="w-full h-screen relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${slide.bg})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
                <div className="z-10 text-white">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-lg mb-6">{slide.subtitle}</p>
                  <a href={slide.link} className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold rounded-lg transition">
                    {slide.button}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
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
          title: "Obazz FC is Family!",
          date: "June 18, 2025",
          image: '/slide1.jpg',
        },
        {
          title: "Yusuf Bamidele played the match of his career! – FK Vojvodina",
          date: "June 12, 2025",
          image: '/Dele.jpg',
        },
        {
          title: "Moses is at it again week after week!!!",
          date: "June 10, 2025",
          image:'/moses.jpg',
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
        src="https://www.youtube.com/embed/FodjjrDpdI8"
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
        { name: "Patrick Obaze", position: "Founder", image: '/coach-thumbnail.jpg',},
        { name: "Jay Smart", position: "Head Coach", image: "" },
        { name: "Ghod", position: "IT Specialist", image: "" }
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
     <footer className="bg-blue-900 text-white pt-12">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-10 border-b border-white/20">
    {/* Address */}
    <div>
      <img src="/obazz-logo.png" alt="Obazz FC" className="w-12 mb-4" />
      <p className="font-bold">Obazz Football Club</p>
      <p>Victory Ground</p>
      <p>Obazz Street</p>
      <p>Lagos, Nigeria</p>
      <p>101001</p>
     <div className="flex gap-4 mt-4">
        <a href="#"><i className="fab fa-facebook-f text-xl"></i></a>
        <a href="#"><i className="fab fa-twitter text-xl"></i></a>
        <a href="https://www.instagram.com/obazzfc"><i className="fab fa-instagram text-xl"></i></a>
        <a href="#"><i className="fab fa-youtube text-xl"></i></a>
        <a href="#"><i className="fab fa-tiktok text-xl"></i></a>
      </div>
    </div>

    {/* Links */}
    <div className="text-sm space-y-3">
      <p className="font-bold">About The Club</p>
      <p><a href="#" className="hover:underline">Contact Us & FAQs</a></p>
      <p><a href="#" className="hover:underline">Frequently Asked Questions</a></p>
      <p><a href="#" className="hover:underline">The Shed – Chat, Rumours & More</a></p>
    </div>

    {/* App Promo */}
    <div>
      <p className="text-sm mb-4">Get unrivalled access to all things Obazz FC with the Official App...</p>
      <div className="flex gap-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" className="h-10" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
      </div>
    </div>
  </div>

  <div className="bg-blue-950 text-xs text-white/70 py-6 mt-4 px-6">
    <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
      <div className="flex gap-6 flex-wrap">
        <a href="#" className="hover:underline">Careers</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Cookies Policy</a>
        <a href="#" className="hover:underline">Terms & Conditions</a>
        <a href="#" className="hover:underline">Sustainability Policy</a>
      </div>
      <p className="mt-4 md:mt-0">&copy; 2025 Obazz FC. All rights reserved.</p>
    </div>
  </div>
</footer>
  </>
  );
}

export default App;
