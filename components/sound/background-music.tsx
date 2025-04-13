"use client";
import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;

    const tryPlayAudio = () => {
      if (audio) {
        console.log("🚀 ~ tryPlayAudio ~ audio:", audio);
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

    const audioTimeout = setTimeout(() => {
      tryPlayAudio();
    }, 100);

    return () => {
      clearTimeout(audioTimeout);
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
