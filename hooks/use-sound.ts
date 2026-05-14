"use client"

export const useHoverSound = (soundPath: string) => {
  const playSound = () => {
    const audio = new Audio(soundPath);
    audio.volume = 0.2; // Set volume agar tidak mengagetkan (0.0 - 1.0)
    
    // Reset suara ke awal jika user hover dengan cepat
    audio.currentTime = 0;
    
    audio.play().catch((err) => {
      // Browser sering memblokir audio otomatis jika user belum berinteraksi dengan halaman
      console.log("Audio play blocked until user interaction", err);
    });
  };

  return playSound;
};