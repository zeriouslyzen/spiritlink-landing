import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "function NULLSPACE[λ]",
    description:
      "Data that exists only in the void. Untraceable, unbreakable.",
    plain: "Invisible storage. Your files can't be found or hacked.",
  },
  {
    title: "function PARALLAX[λ]",
    description:
      "Shifting, adaptive defense. The attack surface is never the same twice.",
    plain: "Security that changes shape—hackers can't predict or attack it.",
  },
  {
    title: "function GLYPH[λ]",
    description:
      "Symbolic, encrypted comms. Language for the initiated.",
    plain: "Secret chat. Only you and your team can read the messages.",
  },
  {
    title: "function PULSE[λ]",
    description:
      "Real-time threat response. Autonomous, aggressive, silent.",
    plain: "Automatic defense. Stops threats instantly, without you lifting a finger.",
  },
  {
    title: "function STRATUM[λ]",
    description:
      "Layered, kinetic energy systems. Power that can't be mapped.",
    plain: "Off-grid power. Your systems stay online, even if the grid goes down.",
  },
];

const ServicesSection = () => (
  <section className="w-full max-w-5xl mx-auto py-12 px-2 sm:px-6 z-10 relative">
    <h2 className="text-2xl sm:text-3xl font-mono font-bold text-[#00fff7] mb-8 text-center tracking-wide">
      // MODULES
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  </section>
);

export default ServicesSection; 