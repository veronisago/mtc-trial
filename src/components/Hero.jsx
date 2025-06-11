import React from 'react';
import heroImage from '../assets/heroImage2x.png';
import GoldButton from '../common/GoldButton';

export default function Hero({ data }) {
  return (
    <div
    className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
    style={{ backgroundImage: `url(${heroImage})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-5"></div>
    <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
      <span className="uppercase tracking-widest text-lightGray text-xs md:text-sm mb-2 text-center font-light">
        {data.eyebrow}
      </span>
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 leading-tight max-w-2xl whitespace-pre-line">
        {data.title}
      </h1>
      <GoldButton onClick={() => (window.location = data.cta.url)}>
        {data.cta.label}
      </GoldButton>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        <span className="h-1 w-12 rounded bg-gold"></span>
        <span className="h-1 w-12 rounded bg-white"></span>
        <span className="h-1 w-12 rounded bg-white"></span>
      </div>
  </div>
  );
}
