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
      title: "Welcome to Obazz FC",
      subtitle: "Pride. Passion. Performance.",
      link: "#matches",
      bg: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1938&auto=format&fit=crop",
      button: "View Fixtures"
    },
    {
      title: "Official Club Shop Now Open",
      subtitle: "Get your jerseys, scarves & more",
      link: "#store",
      bg: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop",
      button: "Shop Now"
    },
    {
      title: "Join the Academy",
      subtitle: "Train with the best and be discovered",
      link: "#team",
      bg: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop",
      button: "Learn More"
    }
  ];

  return (
    <>
      {/* Top Nav */}
      <div className="bg-white text-xs text-gray-700 px-6 py-2 flex justify-between items-center border-b">
        <div className="flex gap-6">
          <a href="#" className="hover:underline">VENUE</a>
          <a href="#" className="hover:underline">CHELSEA FOUNDATION</a>
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
          <li><a href="#">LATEST</a></li>
          <li><a href="#">WATCH</a></li>
          <li className="group relative">
            <a href="#">MEN'S TEAM</a>
            <ul className="absolute left-0 mt-2 w-64 bg-blue-900 text-white p-4 rounded shadow-lg hidden group-hover:block">
              <li className="mb-2"><a href="#">Fixtures / Results / Tables</a></li>
              <li className="mb-2"><a href="#">Buy Tickets</a></li>
              <li className="mb-2"><a href="#">Latest News</a></li>
              <li className="mb-2"><a href="#">Player & Staff Profiles</a></li>
              <li><a href="#">The Academy</a></li>
            </ul>
          </li>
          <li><a href="#">WOMEN'S TEAM</a></li>
          <li><a href="#">TICKETS & HOSPITALITY</a></li>
          <li><a href="#">SHOP</a></li>
        </ul>

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
    </>
  );
}

export default App;
