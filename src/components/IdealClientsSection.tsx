import { GlobeAltIcon } from "@heroicons/react/24/outline";

const IdealClientsSection = () => (
  <section className="w-full max-w-3xl mx-auto py-10 px-2 sm:px-6 z-10 relative">
    <div className="flex flex-col items-center">
      <GlobeAltIcon className="h-10 w-10 text-[#00fff7] mb-2" />
      <h3 className="text-xl sm:text-2xl font-mono font-bold text-[#00fff7] mb-4 text-center">
        // ACCESS: RESTRICTED
      </h3>
      <p className="text-slate-200 text-center text-base sm:text-lg max-w-xl font-mono">
        SYN7H[λ] is architected and operated by a single unseen hand.<br />
        Every deployment is bespoke. Every interaction is encrypted.<br />
        Clients deal directly with the protocol's creator—no intermediaries, no leaks.<br /><br />
        For operators, architects, and visionaries who require more than security—they require erasure.
      </p>
    </div>
  </section>
);

export default IdealClientsSection; 