import React from "react";

const BackgroundMusic = () => {
  return (
    <audio autoPlay loop>
      <source src="/background-music.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundMusic;
