const Footer = () => (
  <footer className="w-full py-8 px-4 flex flex-col items-center bg-gradient-to-t from-black to-transparent z-20 relative mt-8">
    <blockquote className="text-center text-[#00fff7] font-mono italic text-base sm:text-lg max-w-2xl mb-4">
      SYN7H[λ] is not a product. It is a function for those who know how to execute.
    </blockquote>
    <div className="flex gap-4 text-xs text-[#00fff7] font-mono">
      <a href="/privacy" className="hover:underline">/privacy</a>
      <span className="opacity-50">|</span>
      <a href="/access" className="hover:underline">/access</a>
      <span className="opacity-50">|</span>
      <a href="/about" className="hover:underline">/about</a>
      <span className="opacity-50">|</span>
      <a href="/init" className="hover:underline">/init</a>
    </div>
  </footer>
);

export default Footer; 