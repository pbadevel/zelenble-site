"use client";

import Particles from "./particles";
import { useEffect, useState } from "react";

const Background = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-screen fixed inset-0 -z-100 bg-white dark:bg-black" />
    );
  }

  return (
    <div className="w-full h-screen fixed inset-0 -z-100 bg-[var(--background)] transition-colors duration-300">
      <Particles
        particleColors={["#fcfcfc", "#006000", "#2e527a5a"]}
        particleCount={1000}
        particleSpread={8}
        speed={0.1}
        particleBaseSize={50}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};


export default Background;