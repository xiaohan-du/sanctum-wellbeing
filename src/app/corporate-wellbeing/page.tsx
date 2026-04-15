import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from '../page.module.scss';
import { MainBanner } from '../components/mainBanner';
import { ContactRow } from '../components/contactRow';
import { Footer } from '../components/footer';
import { OpeningHours } from '../components/openingHours';
import { Banner } from '../components/banner';
import btnStyles from '../components/btn.module.scss';
import corporate from '../static/images/corporate.png';
import { BackToTop } from '../components/backToTop';

const ENQUIRIES_MAIL = 'mailto:info@sanctumwellbeing.co.uk?subject=Corporate%20wellbeing%20enquiry';

export const metadata: Metadata = {
  title: 'Corporate Wellbeing | Sanctum Wellbeing, Cardiff',
  description:
    'On-site corporate wellbeing treatments for businesses in Cardiff and surrounding areas—stress relief, eased tension, and flexible sessions tailored to your team.',
};

function GradientBulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3 mt-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-3 text-lg sm:text-base leading-7 text-gray-800 items-start"
        >
          <span
            className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#9089fc] to-[#ff80b5] ring-2 ring-white shadow-sm"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="h-9 w-1 shrink-0 rounded-full bg-gradient-to-b from-[#9089fc] to-[#ff80b5] shadow-sm"
        aria-hidden
      />
      <h2 className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
        {children}
      </h2>
    </div>
  );
}

function FancySection({ children }: { children: ReactNode }) {
  return (
    <section
      className="
        relative overflow-hidden rounded-2xl border border-white/80
        bg-white/85 backdrop-blur-sm
        px-4 py-6 sm:px-7 sm:py-7
        shadow-[0_1px_3px_rgba(0,0,0,0.06)]
        mb-6 last:mb-0
      "
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-tl-full bg-gradient-to-br from-[#9089fc]/12 to-transparent"
        aria-hidden
      />
      <div className="relative z-[1] font-sans text-lg sm:text-base leading-7 text-gray-800 space-y-4">
        {children}
      </div>
    </section>
  );
}

export default function CorporateWellbeingPage() {
  return (
    <>
      <main
        id="top"
        className={`${styles.main} w-full max-w-screen-xl px-8 font-serif font-thin tracking-normal sm:px-4`}
      >
        <MainBanner />
        <ContactRow />

        <Banner
          title="Corporate Wellbeing"
          subtitle="On-site treatments · Cardiff and surrounding areas"
          imgUrl={corporate}
          titleAside={
            <Link
              href="/"
              scroll={false}
              className="
                inline-flex items-center gap-2 rounded-full border border-[#9089fc]/35
                bg-white/90 px-4 py-2 text-sm font-medium text-gray-800
                shadow-[0_2px_12px_-2px_rgba(144,137,252,0.2)]
                transition hover:border-[#9089fc]/60 hover:bg-[#faf8ff] hover:text-gray-900
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9089fc]/40
              "
            >
              <span className="text-[#9089fc]" aria-hidden>
                ←
              </span>
              Back to home
            </Link>
          }
          content={[
            'I offer on-site treatments for businesses across Cardiff and surrounding areas.',
            'Corporate wellbeing sessions can help your team reduce stress, ease physical tension, and support morale and productivity.',
          ]}
        />

        <article
          className="
            relative w-full max-w-6xl mx-auto mb-10 mt-8 sm:mt-10
            overflow-hidden rounded-[1.75rem]
            border-2 border-[#9089fc]/55
            bg-gradient-to-b from-[#faf8ff]/95 via-white to-[#fffafd]/90
            shadow-[0_8px_40px_-12px_rgba(144,137,252,0.35),0_4px_16px_-8px_rgba(255,128,181,0.12)]
          "
        >
          <div
            className="pointer-events-none absolute left-0 top-1/4 h-40 w-40 rounded-full bg-[#9089fc]/10 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-0 bottom-0 h-36 w-36 rounded-full bg-[#ff80b5]/8 blur-2xl"
            aria-hidden
          />
          <div className="relative z-[1] space-y-2">
            <FancySection>
              <SectionTitle>Support your team</SectionTitle>
              <p>
                Corporate wellbeing sessions are a great way to support your team—helping to reduce
                stress, ease physical tension, and improve overall morale and productivity.
              </p>
              <GradientBulletList
                items={[
                  'Stress relief and time to reset during the working day',
                  'Easing physical tension from desk work and busy schedules',
                  'A positive signal that employee wellbeing matters',
                ]}
              />
            </FancySection>

            <FancySection>
              <SectionTitle>Tailored to your workplace</SectionTitle>
              <p>
                Treatments can be tailored to your workplace, with flexible options to suit your
                team and schedule.
              </p>
              <p>
                If you&apos;re looking to bring wellbeing into your workplace, get in touch to
                discuss your requirements—I&apos;d be happy to talk through what would work best for
                you.
              </p>
            </FancySection>

            <div className="mt-2 rounded-2xl bg-gradient-to-b from-white to-[#faf8ff]/90 px-4 py-9 sm:px-10 sm:py-11 text-center shadow-[0_8px_32px_-8px_rgba(144,137,252,0.45)]">
                <div className="font-sans text-sm font-medium uppercase tracking-[0.2em] text-[#9089fc]/90 mb-2">
                  Next step
                </div>
                <h2 className="font-sans text-2xl sm:text-xl font-semibold text-gray-900 mb-4">
                  Discuss corporate wellbeing
                </h2>
                <p className="font-sans text-lg sm:text-base leading-7 text-gray-600 mb-9 max-w-xl mx-auto">
                  Email to tell me about your team, workplace, and what you have in mind—I&apos;ll
                  get back to you to explore options.
                </p>
                <a href={ENQUIRIES_MAIL} className="block w-full max-w-full">
                  <button
                    type="button"
                    className={`${btnStyles.bookFluid} w-full font-sans font-semibold text-xl sm:text-2xl md:text-3xl shadow-lg`}
                  >
                    Email an enquiry
                  </button>
                </a>
            </div>
          </div>
        </article>

        <OpeningHours />
        <BackToTop />
        <Footer />
      </main>
    </>
  );
}
