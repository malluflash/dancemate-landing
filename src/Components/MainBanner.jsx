import { useState, useEffect, useRef } from 'react';
import LoginForm from './LoginForm.jsx';
import { page_desc, page_title, bannerVideo } from '../Utils/constants.js';

const MainBanner = () => {
  const [showLogin, setShowLogin] = useState(false);
  const videoRef = useRef(null);

  const handleLoginForm = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      const handleTimeUpdate = () => {
        if (video.currentTime >= 6) {
          video.currentTime = 0;
          video.play();
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);

      // Cleanup the event listener if the component unmounts
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [videoRef]);

  return (
    <div className="relative h-screen">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={bannerVideo}
        autoPlay
        muted
      ></video>
      <div className={`absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center ${showLogin ? 'hidden' : 'flex'}`}>
        <div className="text-center text-white">
          <h1 className="text-8xl font-cursive">{page_title}</h1>
          <h2 className="text-4xl mt-3 pl-10 pr-10"> {page_desc} </h2>
          <button
            onClick={handleLoginForm}
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
