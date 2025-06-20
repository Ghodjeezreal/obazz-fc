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
     {/* FOOTER SECTION */}
<footer className="bg-blue-900 text-white py-10 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
    {/* Left: Club Info */}
    <div>
      <h3 className="text-yellow-400 text-xl font-bold mb-3">Obazz FC</h3>
      <p>Pride. Passion. Performance.</p>
      <p className="mt-2">© {new Date().getFullYear()} Obazz FC. All rights reserved.</p>
    </div>

    {/* Center: Quick Links */}
    <div>
      <h4 className="text-yellow-400 font-semibold mb-3">Quick Links</h4>
      <ul className="space-y-2">
        <li><a href="#matches" className="hover:underline">Match Center</a></li>
        <li><a href="#news" className="hover:underline">Latest News</a></li>
        <li><a href="#videos" className="hover:underline">Videos</a></li>
        <li><a href="#team" className="hover:underline">Team</a></li>
        <li><a href="#store" className="hover:underline">Official Store</a></li>
      </ul>
    </div>

    {/* Right: Social Icons */}
    <div>
      <h4 className="text-yellow-400 font-semibold mb-3">Follow Us</h4>
      <div className="flex gap-4 mt-2">
        {/* Facebook */}
        <a href="#" aria-label="Facebook">
          <svg className="w-5 h-5 fill-current hover:text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91V127.91c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S293.32 0 263.36 0C181.67 0 141.09 54.42 141.09 122.89v73.44H89.09V288h52v224h100.2V288z"/></svg>
        </a>
        {/* Twitter */}
        <a href="#" aria-label="Twitter">
          <svg className="w-5 h-5 fill-current hover:text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 2.8.3 5.7.3 8.5 0 87-66.3 187.2-187.2 187.2-37.2 0-71.8-10.9-100.8-29.6 5.2.6 10.4.8 15.6.8a132.4 132.4 0 0082.1-28.3c-24.6-.4-45.4-16.7-52.6-39 3.4.6 6.8.9 10.4.9 5 0 9.8-.7 14.3-1.9-26-5.2-45.4-28.1-45.4-55.5v-.7c7.6 4.2 16.3 6.8 25.5 7.2a66.4 66.4 0 01-29.5-55.1c0-12.2 3.3-23.6 9-33.4a187.5 187.5 0 00136 69.3c-1.1-4.9-1.7-9.9-1.7-15.1 0-36.2 29.4-65.5 65.5-65.5 18.8 0 35.9 7.9 47.8 20.7a130.9 130.9 0 0041.3-15.8c-4.2 13.1-13.1 24.1-24.6 31 11.6-1.4 22.6-4.5 32.8-9-7.7 11.4-17.4 21.6-28.6 29.8z"/></svg>
        </a>
        {/* Instagram */}
        <a href="https://www.instagram.com/obazzfc" aria-label="Instagram">
          <svg className="w-5 h-5 fill-current hover:text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 202.66A53.34 53.34 0 1170.66 256 53.34 53.34 0 01224 202.66zm124.71-41.42a54 54 0 00-30.9-30.9C286.84 120 224 120 224 120s-62.84 0-93.81 10.35a54 54 0 00-30.9 30.9C89 151.66 89 224 89 224s0 62.84 10.35 93.81a54 54 0 0030.9 30.9C161.16 376 224 376 224 376s62.84 0 93.81-10.35a54 54 0 0030.9-30.9C359 286.84 359 224 359 224s0-62.84-10.35-93.81zM224 338a114 114 0 11114-114 114.13 114.13 0 01-114 114zm146.4-150.1a26.6 26.6 0 1126.6-26.6 26.6 26.6 0 01-26.6 26.6z"/></svg>
        </a>
        {/* YouTube */}
        <a href="#" aria-label="YouTube">
          <svg className="w-5 h-5 fill-current hover:text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.6-24.9-42.2-48.5-48.5C455.1 64 288 64 288 64s-167.1 0-213.3 11.6c-23.6 6.3-42.2 24.9-48.5 48.5C16.6 170.3 16 213.8 16 256s.6 85.7 10.2 131.9c6.3 23.6 24.9 42.2 48.5 48.5C120.9 448 288 448 288 448s167.1 0 213.3-11.6c23.6-6.3 42.2-24.9 48.5-48.5C559.4 341.7 560 298.2 560 256s-.6-85.7-10.3-131.9zM232 336V176l142 80-142 80z"/></svg>
        </a>
        {/* TikTok (optional custom) */}
        <a href="#" aria-label="TikTok">
          <svg className="w-5 h-5 fill-current hover:text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448,209.9V152c-36.4,0-72.5-12.4-101.3-35.2V332c0,66.3-53.7,120-120,120S106.7,398.3,106.7,332s53.7-120,120-120c5.6,0,11.1,0.5,16.5,1.4v-60.6c-5.5-0.7-11.1-1.1-16.5-1.1C100.3,151.7,0,252,0,376s100.3,224,224,224s224-100.3,224-224C448,287.2,454.6,247.6,448,209.9z"/></svg>
        </a>
      </div>
    </div>
  </div>
</footer>
  </>
  );
}

export default App;
