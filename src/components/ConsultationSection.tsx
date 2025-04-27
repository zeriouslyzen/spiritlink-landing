"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ConsultationSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSubmitted(false);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/access-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const err = await res.json();
        setError(err.error || "Unknown error");
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto py-12 px-2 sm:px-6 z-10 relative flex flex-col items-center">
      <h3 className="text-xl sm:text-2xl font-mono font-bold text-[#00fff7] mb-2 text-center">
        // INITIATE: ACCESS REQUEST
      </h3>
      <p className="text-slate-200 text-center mb-6 max-w-lg font-mono">
        SYN7H[λ] is architected, deployed, and maintained by a single operator.<br />
        Access means direct interaction with the protocol's creator. Every deployment is bespoke. Every result is delivered directly.<br />
        Access requires proof, vetting, and intent. No exceptions.
      </p>
      <motion.button
        className="relative overflow-hidden bg-[#00fff7] text-black font-mono font-semibold px-8 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00fff7] transition-all text-lg"
        style={{
          boxShadow: "0 0 24px 8px #00fff7, 0 0 64px 16px #00fff7",
        }}
        animate={{
          boxShadow: [
            "0 0 24px 8px #00fff7, 0 0 64px 16px #00fff7",
            "0 0 36px 12px #00fff7, 0 0 80px 24px #00fff7",
            "0 0 24px 8px #00fff7, 0 0 64px 16px #00fff7",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowForm((v) => !v)}
      >
        <span>Request /access?code=SYN7H</span>
        <motion.span
          className="absolute inset-0 pointer-events-none"
          initial={false}
          animate={{
            boxShadow: showForm
              ? "0 0 0 8px #00fff7, 0 0 32px 8px #00fff7"
              : "0 0 0 0 #00fff7",
            opacity: showForm ? 0.3 : 0,
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.button>
      <AnimatePresence>
        {showForm && (
          <motion.form
            className="mt-8 bg-[#181a2a] border border-[#00fff7]/40 rounded-xl p-6 w-full max-w-md flex flex-col gap-4 z-20 shadow-xl font-mono"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            onSubmit={handleSubmit}
          >
            <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
            <label className="text-[#00fff7] font-medium">Codename
              <input required name="codename" className="mt-1 w-full rounded bg-black border border-[#00fff7]/40 px-3 py-2 text-[#00fff7] focus:ring-2 focus:ring-[#00fff7] outline-none" />
            </label>
            <label className="text-[#00fff7] font-medium">Secure Contact
              <input required type="email" name="contact" className="mt-1 w-full rounded bg-black border border-[#00fff7]/40 px-3 py-2 text-[#00fff7] focus:ring-2 focus:ring-[#00fff7] outline-none" />
            </label>
            <label className="text-[#00fff7] font-medium">Intent
              <textarea required name="intent" rows={4} className="mt-1 w-full rounded bg-black border border-[#00fff7]/40 px-3 py-2 text-[#00fff7] focus:ring-2 focus:ring-[#00fff7] outline-none" />
            </label>
            <button
              type="submit"
              className="bg-[#00fff7] hover:bg-[#00e6d6] text-black font-mono font-semibold py-2 px-6 rounded-full mt-2 transition-colors disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Access Request"}
            </button>
            {submitted && (
              <div className="text-green-400 text-center mt-2">Request submitted. Await further instructions.</div>
            )}
            {error && (
              <div className="text-red-400 text-center mt-2">{error}</div>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ConsultationSection; 