"use client";
import Link from "next/link";

const logs = [
  { time: "00:00:01", entry: "[λ] :: SYN7H[λ] protocol boot sequence initiated." },
  { time: "00:00:03", entry: "[λ] :: Nullspace module: online." },
  { time: "00:00:05", entry: "[λ] :: Parallax module: adaptive state confirmed." },
  { time: "00:00:07", entry: "[λ] :: Glyph comms: encrypted channel established." },
  { time: "00:00:09", entry: "[λ] :: Pulse: threat response active." },
  { time: "00:00:11", entry: "[λ] :: Stratum: kinetic layer secure." },
  { time: "00:00:13", entry: "[λ] :: Operator presence: [detected]" },
  { time: "00:00:15", entry: "[λ] :: Awaiting input..." },
];

export default function Init() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#181a2a] to-black px-4 py-16">
      <div className="max-w-2xl w-full bg-[#181a2a]/80 rounded-xl shadow-xl p-8 flex flex-col items-center border border-[#00fff7]/20">
        <h1 className="text-2xl sm:text-3xl font-mono font-bold text-[#00fff7] mb-6 text-center">// SYSTEM LOG: /init</h1>
        <div className="w-full font-mono text-[#00fff7] text-base bg-black/60 rounded p-4 mb-6">
          {logs.map((log, i) => (
            <div key={i} className="mb-1">
              <span className="opacity-60">[{log.time}]</span> {log.entry}
            </div>
          ))}
        </div>
        <div className="text-slate-400 font-mono text-center text-base mt-4 mb-6">
          // If you found this, you are already inside.<br />
          // SYN7H[λ] does not forget.<br />
          // Await further instructions.
        </div>
        <Link href="/" className="text-[#00fff7] font-mono text-sm hover:underline">// return</Link>
      </div>
    </div>
  );
} 