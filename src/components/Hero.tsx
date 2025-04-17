import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
          Connect, Share, and Discover<br />Your College Community
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Post images, chat with friends, and meet people who share your interests.
        </p>
        <button className="bg-transparent border-2 border-[#FFD700] text-[#FFD700] font-bold text-lg px-8 py-4 rounded-full hover:shadow-[0_0_30px_#FFD700] transition-all transform hover:scale-105">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Hero;