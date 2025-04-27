"use client";
import React, { useEffect, useRef } from "react";

// Katakana, numbers, and symbols for Matrix rain
const glyphs = "アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチッヂヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤャユュヨョラリルレロワヲン0123456789@#$%&*".split("");

function MatrixRain() {
  const canvasRef = useRef(null);
  const animationRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    const fontSize = 22;
    const columns = Math.floor(width / fontSize);
    const dropSpeed = 0.05; // Even slower for visual breathing
    const drops = Array(columns).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(10, 10, 20, 0.12)"; // Lower opacity for more subtle effect
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = "#00fff7";
      for (let i = 0; i < drops.length; i++) {
        const text = glyphs[Math.floor(Math.random() * glyphs.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (Math.random() > 0.99) {
          drops[i] = 0;
        }
        drops[i] += dropSpeed;
        if (drops[i] * fontSize > height) {
          drops[i] = 0;
        }
      }
    }

    function animate() {
      draw();
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.18 }}
    />
  );
}

const SacredGeometryBackground: React.FC = () => (
  <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
    <MatrixRain />
    <svg
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.08 }}
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="960" cy="540" r="400" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="960" cy="540" r="300" stroke="#6366f1" strokeWidth="1.5" />
      <circle cx="960" cy="540" r="200" stroke="#0ea5e9" strokeWidth="1" />
      <g stroke="#6366f1" strokeWidth="0.5">
        {[...Array(12)].map((_, i) => (
          <ellipse
            key={i}
            cx="960"
            cy="540"
            rx={400 - i * 30}
            ry={200 - i * 15}
            transform={`rotate(${i * 30} 960 540)`}
          />
        ))}
      </g>
    </svg>
  </div>
);

export default SacredGeometryBackground; 