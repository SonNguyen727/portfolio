import React from 'react';

const Games = () => {
  const games = [
    {
      name: 'Valorant',
      description: 'Competitive FPS - Diamond rank',
      image: '/vite.svg',
      link: 'https://playvalorant.com'
    },
    {
      name: 'League of Legends',
      description: 'MOBA - Main ADC/Support',
      image: '/vite.svg',
      link: 'https://leagueoflegends.com'
    },
    {
      name: 'Stardew Valley',
      description: 'Relaxing farming sim',
      image: '/vite.svg',
      link: 'https://stardewvalley.net'
    },
    {
      name: 'My Indie Game',
      description: 'Personal project built with Unity',
      image: '/vite.svg',
      link: '/projects/my-game'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Games I Play & Develop</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {games.map((game, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img src={game.image} alt={game.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{game.name}</h2>
              <p className="text-gray-600 mb-4">{game.description}</p>
              <a href={game.link} className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Play/View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;

