

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-black text-white shadow-lg">
      <div className="text-2xl font-bold cursor-pointer hover:text-gray-400 transition-colors duration-300">DanceMate</div>
      <ul className="flex gap-8">
        <li><a href="#home" className="hover:text-gray-400 transition-colors duration-300">Home</a></li>
        <li><a href="#about" className="hover:text-gray-400 transition-colors duration-300">About Us</a></li>
        <li><a href="#classes" className="hover:text-gray-400 transition-colors duration-300">Classes</a></li>
        <li><a href="#rate-info" className="hover:text-gray-400 transition-colors duration-300">Rate & Info</a></li>
        <li><a href="#contact" className="hover:text-gray-400 transition-colors duration-300">Contact Us</a></li>
      </ul>
      <div className="flex gap-5">
        <a href="#" className="hover:text-gray-400 transition-colors duration-300"><i className="fab fa-youtube"></i></a>
        <a href="#" className="hover:text-gray-400 transition-colors duration-300"><i className="fab fa-instagram"></i></a>
        <a href="#" className="hover:text-gray-400 transition-colors duration-300"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-gray-400 transition-colors duration-300"><i className="fab fa-facebook"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;

