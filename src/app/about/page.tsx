"use client";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#181a2a] to-black px-4 py-16">
      <div className="max-w-2xl w-full bg-[#181a2a]/80 rounded-xl shadow-xl p-8 flex flex-col items-center border border-[#00fff7]/20">
        <h1 className="text-3xl sm:text-4xl font-mono font-bold text-[#00fff7] mb-4 text-center">// OPERATOR: [λ]</h1>
        <p className="text-slate-200 font-mono text-lg text-center mb-6">
          SYN7H[λ] is architected, deployed, and maintained by a single unseen hand.<br />
          There is no team. No board. No intermediaries.<br /><br />
          Every protocol instance is bespoke—designed for those who require more than security: they require erasure, presence control, and operational silence.<br /><br />
          The Operator is never named. All interactions are encrypted. All results are delivered directly.<br /><br />
          If you are reading this, you have found the edge.
        </p>
        <div className="text-xs text-[#00fff7] font-mono opacity-60 mt-4 mb-6">// END OF TRANSMISSION</div>
        <Link href="/" className="text-[#00fff7] font-mono text-sm hover:underline">// return</Link>
      </div>
    </div>
  );
} 