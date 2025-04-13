"use client";
import { useEffect } from "react";

const BackgroundMusic = () => {
  const audio = document.getElementById(
    "auto-play-audio"
  ) as HTMLAudioElement | null;

  useEffect(() => {
    const tryPlayAudio = () => {
      if (audio && audio.paused) {
        audio
          .play()
          .then(() => {
            console.log("Audio playing");
          })
          .catch((err) => {
            console.warn("Autoplay prevented:", err);
          });
      }
    };

    tryPlayAudio();
  }, [audio]);

  return (
    <audio autoPlay loop id="auto-play-audio">
      <source src="/background-music.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundMusic;
