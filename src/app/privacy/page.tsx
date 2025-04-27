"use client";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#181a2a] to-black px-4 py-16">
      <div className="max-w-2xl w-full bg-[#181a2a]/80 rounded-xl shadow-xl p-8 flex flex-col items-center border border-[#00fff7]/20">
        <h1 className="text-3xl sm:text-4xl font-mono font-bold text-[#00fff7] mb-4 text-center">// PRIVACY PROTOCOL</h1>
        <div className="text-slate-200 font-mono text-base sm:text-lg text-left mb-6 space-y-4">
          <p>// SYN7H[λ] does not track. No analytics. No cookies. No surveillance.</p>
          <p>// Access requests are encrypted in transit and delivered directly to the Operator. No data is stored on this server. No third-party sharing. No marketing.</p>
          <p>// Only the minimum required information is requested for access: codename, secure contact, and intent. If you do not wish to provide this, do not use the form.</p>
          <p>// SYN7H[λ] is a protocol, not a product. Your presence is not logged. Your actions are not profiled. Your data is not sold.</p>
          <p>// If you have questions, use the access request form. No other contact methods are provided.</p>
          <p className="text-[#00fff7]/70">// This policy is subject to change without notice. If you are reading this, you are already inside.</p>
        </div>
        <Link href="/" className="text-[#00fff7] font-mono text-sm hover:underline">// return</Link>
      </div>
    </div>
  );
} 