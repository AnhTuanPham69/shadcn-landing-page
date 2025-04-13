"use client";
import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;

    const tryPlayAudio = () => {
      if (audio) {
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

    // Trigger play on first user click
    window.addEventListener("click", tryPlayAudio);

    return () => {
      window.removeEventListener("click", tryPlayAudio);
    };
  }, [audioRef]);

  return (
    <audio ref={audioRef} autoPlay loop>
      <source src="/background-music.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundMusic;
