import React from "react";

interface WidgetXSProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const WidgetXS: React.FC<WidgetXSProps> = ({ title, children, className = "" }) => (
  <section
    className={`bg-gradient-to-br from-[#181a2a] to-[#0a0a1a] border border-[#00fff7]/40 rounded-xl p-4 shadow-lg font-mono ${className}`}
    style={{ minWidth: 0 }}
  >
    <h3 className="text-base font-bold text-[#00fff7] mb-2 tracking-wide flex items-center gap-2">
      <span className="text-xs opacity-60">//</span> {title}
    </h3>
    <div>{children}</div>
  </section>
);

export default WidgetXS; 