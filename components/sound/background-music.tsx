"use client";
import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const tryPlayAudio = () => {
    const audio = audioRef.current;

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

  useEffect(() => {
    const audioTimeout = setTimeout(() => {
      tryPlayAudio();
    }, 100);

    return () => {
      clearTimeout(audioTimeout);
    };
  }, [audioRef]);

  useEffect(() => {
    // Play on first click anywhere on the document
    document.addEventListener("click", tryPlayAudio, { once: true });

    return () => {
      document.removeEventListener("click", tryPlayAudio);
    };
  }, []);

  return (
    <audio ref={audioRef} autoPlay loop>
      <source src="/background-music.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundMusic;
