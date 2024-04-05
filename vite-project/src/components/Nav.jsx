import React, { useState } from "react";

const ImageSelector = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "hero.png",
    "horse nft.webp",
    "Goon.avif",
    "Goon3.avif",
    "nft_1.png",
    "nft-image-3.png",
    "creatorbackground-5.jpg",
    "creatorbackground-10.jpg",
    "creatorbackground-11.jpg",
  ];

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setSelectedImage(images[randomIndex]);
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-t from-indigo-700 to-white">
      <button
        className="text-center border p-4 bg-indigo-500 text-red-300 rounded-2xl border-green-300 hover:text-pink-500 animate-bounce transition-transform	 "
        onClick={handleButtonClick}
      >
        click
      </button>
      {selectedImage ? (
        <img
          className="w-[100%] h-[100%] object-contain  "
          src={selectedImage}
          alt="Random Image"
        />
      ) : null}
    </div>
  );
};

export default ImageSelector;



