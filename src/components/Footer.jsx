const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Shouto Desuwa</h3>
            <p className="text-gray-400">Full Stack Developer & Creative</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/games" className="hover:text-blue-400 transition-colors">Games</a></li>
              <li><a href="/music" className="hover:text-blue-400 transition-colors">Music</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>shouto@desuwa.com</li>
              <li><a href="https://github.com/shoutodesuwa" className="hover:text-blue-400">GitHub</a></li>
              <li><a href="https://linkedin.com/in/shoutodesuwa" className="hover:text-blue-400">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Shouto Desuwa. All rights reserved. Built with React & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
