export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 py-8 px-[5vw] flex justify-between items-center z-50 mix-blend-difference">
      <div className="text-[0.75rem] uppercase tracking-[0.2em] text-[#666666] font-medium text-white tracking-[0.3em]">
        ANIRUDDHA ROY
      </div>
      <div className="flex gap-6">
        <a
          href="https://github.com/anni-kelp"
          target="_blank"
          className="text-[0.75rem] uppercase tracking-[0.2em] text-[#666666] font-medium text-white hover:opacity-50 transition-opacity"
        >
          GITHUB
        </a>
        <a
          href="https://linkedin.com/in/anni-kelp"
          target="_blank"
          className="text-[0.75rem] uppercase tracking-[0.2em] text-[#666666] font-medium text-white hover:opacity-50 transition-opacity"
        >
          LINKEDIN
        </a>
      </div>
    </nav>
  );
}
