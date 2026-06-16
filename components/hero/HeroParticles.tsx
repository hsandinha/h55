"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

// Rede de partículas animada (constelação) que reage ao mouse. É o efeito que
// se move sobre o fundo do hero.
export function HeroParticles() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="hero-particles"
      init={init}
      className="h-full w-full"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" }, resize: true },
          modes: { grab: { distance: 170, links: { opacity: 0.5 } } },
        },
        particles: {
          color: { value: ["#e8b23a", "#ffffff"] },
          links: { color: "#caa64a", distance: 150, enable: true, opacity: 0.22, width: 1 },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "bounce" },
          },
          number: { density: { enable: true, area: 900 }, value: 55 },
          opacity: { value: 0.45 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}
