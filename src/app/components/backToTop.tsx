'use client';

export function BackToTop() {
  return (
    <div className="w-full flex justify-center mt-10 mb-6 font-sans">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="
          inline-flex items-center gap-2 rounded-full border border-[#9089fc]/35
          bg-white/90 px-5 py-2.5 text-sm font-medium text-gray-800
          shadow-[0_2px_12px_-2px_rgba(144,137,252,0.25)]
          transition hover:border-[#9089fc]/60 hover:bg-[#faf8ff] hover:text-gray-900
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9089fc]/40
        "
      >
        <span className="text-[#9089fc]" aria-hidden>
          ↑
        </span>
        Back to top
      </button>
    </div>
  );
}
