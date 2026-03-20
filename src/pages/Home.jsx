import React from 'react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <img 
          src="/vite.svg" 
          alt="Shouto Desuwa" 
          className="w-32 h-32 rounded-full mx-auto mb-8 shadow-lg"
        />
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Shouto Desuwa
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Full Stack Developer & Game Enthusiast | Passionate about Music Production
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Web Dev</h3>
            <p>React, Tailwind, Vite expert</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Games</h3>
            <p>Gamer & Indie dev</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Music</h3>
            <p>Producer & DJ</p>
          </div>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to my portfolio! Explore my gaming favorites, music projects, and get in touch.
        </p>
      </div>
    </div>
  );
};

export default Home;

