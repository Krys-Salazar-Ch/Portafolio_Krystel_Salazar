"use client";

import { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { useEffect, useState } from "react";

export function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const particlesLoaded = useCallback(async (_container?: Container) => {
    return;
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true }
        },
        modes: {
          grab: { distance: 150, links: { opacity: 0.45 } },
          repulse: { distance: 110, duration: 0.3 }
        }
      },
      particles: {
        color: { value: ["#8b5cf6", "#22d3ee", "#ffffff"] },
        links: {
          color: "#94a3b8",
          distance: 140,
          enable: true,
          opacity: 0.18,
          width: 1
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: false,
          speed: 0.8,
          straight: false
        },
        number: {
          density: { enable: true, area: 900 },
          value: 60
        },
        opacity: { value: 0.6 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3.5 } }
      },
      detectRetina: true
    }),
    []
  );

  if (!ready) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
}
