import React from 'react';

const Header = ({ socialHandles }) => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="flex justify-between items-center">
  {/* Navigation links */}
  <ul className="flex space-x-4">
    <li>
      <a href="#" className="text-white hover:text-gray-300">Home</a>
    </li>
    <li>
      <a href="#about" className="text-white hover:text-gray-300">About</a>
    </li>
    <li>
      <a href="#skills" className="text-white hover:text-gray-300">Skills</a>
    </li>
    <li>
      <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
    </li>
    <li>
      <a href="#services" className="text-white hover:text-gray-300">Services</a>
    </li>
    <li>
      <a href="#timeline" className="text-white hover:text-gray-300">Timeline</a>
    </li>
    <li>
      <a href="#testimonials" className="text-white hover:text-gray-300">Testimonials</a>
    </li>
    <li>
      <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
    </li>
  </ul>
  <div className="flex items-center mt-4">
    {/* Social media icons */}
    {socialHandles?.map((handle) => (
      <a key={handle._id} href={handle.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 mr-4">
        <img src={handle.image.url} alt={handle.platform} className="w-6 h-6" />
      </a>
    ))}
  </div>
</nav>

    </header>
  );
};

export default Header;
