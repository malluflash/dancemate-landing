import bannerImage from '../assets/banner-image.jpg'; // Add your image to the assets folder
import { useState } from 'react';
import LoginForm from './/LoginForm.jsx';

const MainBanner = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handlePlayVideoClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className={`absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center ${showLogin ? 'hidden' : 'flex'}`}>
        <div className="text-center text-white">
          <h1 className="text-8xl font-cursive">Welcome to Dance Mate !</h1>
          <h2 className="text-4xl mt-3 pl-10 pr-10">
            The Dance Mate App stands out as an innovative online platform committed to elevating the dance education journey.
            Prioritizing accessibility, interactivity, and community development, this web application transforms the landscape of dance instruction,
            serving the needs of both dance enthusiasts and professionals!
          </h2>
          <button
            onClick={handlePlayVideoClick}
            className="mt-5 px-6 py-3 text-lg bg-white text-black hover:bg-gray-200"
          >
            Get Started
          </button>
        </div>
      </div>
      <LoginForm show={showLogin} onClose={handleCloseLogin} />
    </div>
  );
};

export default MainBanner;
