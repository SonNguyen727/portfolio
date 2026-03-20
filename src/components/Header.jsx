const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block mb-8">
          <img 
            src="/vite.svg" 
            alt="Logo" 
            className="w-24 h-24 mx-auto mb-4 spin-in"
          />
        </div>
        <h1 className="text-6xl md:text-7xl font-black mb-6 drop-shadow-lg fade-in-up delay-1">
          Shouto
        </h1>
        <p className="text-2xl md:text-3xl mb-8 drop-shadow-md fade-in-up delay-2">
          Desuwa
        </p>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90 fade-in-up delay-3">
          Crafting amazing digital experiences with code, music, and games.
        </p>
      </div>
    </header>
  );
};

export default Header;
