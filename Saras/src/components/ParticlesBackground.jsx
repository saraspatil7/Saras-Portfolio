import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
        },

        background: {
          color: "transparent",
        },

        fpsLimit: 120,

        particles: {
          number: {
            value: 60,
          },

          color: {
            value: "#22d3ee",
          },

          links: {
            enable: true,
            color: "#22d3ee",
            distance: 150,
            opacity: 0.2,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1.5,
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: {
              min: 1,
              max: 4,
            },
          },
        },

        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
}

export default ParticlesBackground;