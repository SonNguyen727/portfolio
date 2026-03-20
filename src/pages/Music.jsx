import React from 'react';

const Music = () => {
  const tracks = [
    {
      title: 'Summer Vibes',
      artist: 'Shouto Desuwa',
      embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Original EDM track'
    },
    {
      title: 'Chill Beats',
      artist: 'Shouto Desuwa',
      embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Lo-fi beats to study/relax'
    },
    {
      title: 'Epic Game OST',
      artist: 'Shouto Desuwa',
      embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Custom soundtrack for indie game'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">My favorite Music</h1>
      <div className="space-y-8">
        {tracks.map((track, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-shadow">
            <div className="md:w-1/3">
              <iframe
                width="100%"
                height="200"
                src={track.embed}
                title={track.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-2">{track.title}</h2>
              <p className="text-gray-600 mb-4">by {track.artist}</p>
              <p className="text-lg">{track.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="https://soundcloud.com/shoutodesuwa" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
          Listen on SoundCloud
        </a>
      </div>
    </div>
  );
};

export default Music;

