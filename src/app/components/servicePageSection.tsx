import type { ReactNode } from 'react';

function GradientBackdrop() {
  return (
    <>
      <div
        className="pointer-events-none absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className="pointer-events-none absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
    </>
  );
}

const headingClass =
  'mb-6 text-3xl font-semibold tracking-wide text-gray-900 xl:text-2xl font-sans sm:text-xl';

type ServicePageSectionProps = {
  title: string;
  sectionId: string;
  children: ReactNode;
  className?: string;
};

export function ServicePageSection({ title, sectionId, children, className = '' }: ServicePageSectionProps) {
  const headingId = `${sectionId}-heading`;
  return (
    <section
      className={`relative isolate mb-14 w-full overflow-hidden rounded-xl border border-gray-200/80 bg-white py-10 shadow-lg sm:mb-12 sm:py-8 ${className}`}
      aria-labelledby={headingId}
    >
      <GradientBackdrop />
      <div className="relative z-10 mx-auto max-w-3xl px-10 sm:px-6">
        <h2 id={headingId} className={headingClass}>
          {title}
        </h2>
        <div className="font-sans text-lg leading-relaxed text-gray-800 xl:text-base sm:text-base">{children}</div>
      </div>
    </section>
  );
}

type ServiceCtaPanelProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function ServiceCtaPanel({ title, children, className = '' }: ServiceCtaPanelProps) {
  const headingId = 'service-cta-heading';
  return (
    <section
      className={`relative isolate mb-12 w-full overflow-hidden rounded-xl border border-[#9089fc]/30 bg-gradient-to-br from-white via-[#f8f6ff] to-[#fff5fb] py-12 text-center shadow-lg sm:py-10 ${className}`}
      aria-labelledby={headingId}
    >
      <GradientBackdrop />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-10 sm:px-6">
        <h2 id={headingId} className={`${headingClass} mb-0 text-center`}>
          {title}
        </h2>
        <div className="w-full font-sans text-lg leading-relaxed text-gray-800 xl:text-base">{children}</div>
      </div>
    </section>
  );
}
