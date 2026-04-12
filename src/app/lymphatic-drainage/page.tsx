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
import lymphatic from '../static/images/lymphatic.png';
import { BackToTop } from '../components/backToTop';

const FRESHA_LYMPHATIC =
  'https://www.fresha.com/book-now/sanctum-wellbeing-gq5cksyy/services?lid=1114766&eid=2652609&share=true&pId=1057120';

export const metadata: Metadata = {
  title: 'Lymphatic Drainage Massage | Sanctum Wellbeing',
  description:
    'Specialist lymphatic drainage massage in Cardiff at Sanctum Wellbeing — support your body’s natural detox, reduce water retention, and feel lighter and more energised.',
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

export default function LymphaticDrainagePage() {
  return (
    <>
      <main
        id="top"
        className={`${styles.main} w-full max-w-screen-xl px-8 font-serif font-thin tracking-normal sm:px-4`}
      >
        <MainBanner />
        <ContactRow />

        <Banner
          title="Lymphatic Drainage Massage"
          subtitle="Specialist lymphatic drainage · Sanctum Wellbeing, Cardiff"
          imgUrl={lymphatic}
          titleAside={
            <Link
              href="/"
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
            'If you’re feeling bloated, sluggish, or holding onto excess fluid, lymphatic drainage massage can help restore balance in your body.',
            'At Sanctum Wellbeing in Cardiff, I offer specialist lymphatic drainage treatments designed to support your body’s natural detox process, reduce water retention, and help you feel lighter, more energised, and more comfortable in yourself.',
          ]}
        />

        <article
          className="
            relative w-full max-w-6xl mx-auto mb-10 mt-8 sm:mt-10
            overflow-hidden rounded-[1.75rem]
            border border-[#e8e4ff]/80
            bg-gradient-to-b from-[#faf8ff]/95 via-white to-[#fffafd]/90
            px-4 sm:px-8 py-8 sm:py-10
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
              <SectionTitle>What is lymphatic drainage massage?</SectionTitle>
              <p>
                Lymphatic drainage massage is a gentle but effective treatment that stimulates the
                lymphatic system, helping your body to remove toxins, excess fluid, and waste more
                efficiently.
              </p>
              <p className="text-gray-700">
                This treatment is particularly beneficial if you experience:
              </p>
              <GradientBulletList
                items={[
                  'Bloating or puffiness',
                  'Water retention',
                  'Hormonal imbalance',
                  'Sluggish digestion',
                  'Fatigue or heaviness',
                ]}
              />
            </FancySection>

            <FancySection>
              <SectionTitle>Your treatment at Sanctum Wellbeing</SectionTitle>
              <p>
                At Sanctum Wellbeing, I combine a range of techniques to tailor your treatment:
              </p>
              <ul className="space-y-3 mt-2">
                <li className="rounded-xl border border-[#9089fc]/20 bg-gradient-to-r from-[#9089fc]/[0.08] to-transparent px-4 py-3">
                  <span className="font-semibold text-gray-900">Manual Lymphatic Drainage (MLD)</span>
                  <span className="text-gray-700">
                    {' — '}gentle, rhythmic movements to stimulate lymph flow
                  </span>
                </li>
                <li className="rounded-xl border border-[#ff80b5]/25 bg-gradient-to-r from-[#ff80b5]/[0.07] to-transparent px-4 py-3">
                  <span className="font-semibold text-gray-900">
                    Brazilian Lymphatic Drainage Massage
                  </span>
                  <span className="text-gray-700">
                    {' — '}more dynamic techniques for visible sculpting and contouring
                  </span>
                </li>
                <li className="rounded-xl border border-[#9089fc]/20 bg-gradient-to-r from-[#9089fc]/[0.08] to-transparent px-4 py-3">
                  <span className="font-semibold text-gray-900">Maderotherapy (Wood Therapy)</span>
                  <span className="text-gray-700">
                    {' — '}targeted tools to support circulation and fluid movement
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 italic border-l-2 border-[#9089fc]/40 pl-4 mt-4">
                Each session is adapted to your body and your needs.
              </p>
            </FancySection>

            <FancySection>
              <SectionTitle>Benefits</SectionTitle>
              <p className="text-gray-700">Clients often notice:</p>
              <GradientBulletList
                items={[
                  'Reduced bloating and fluid retention',
                  <>A lighter, less &quot;puffy&quot; feeling</>,
                  'Improved digestion',
                  'Better energy levels',
                  'A more sculpted, toned appearance',
                ]}
              />
            </FancySection>

            <FancySection>
              <SectionTitle>Who this is for</SectionTitle>
              <p className="text-gray-700">This treatment is ideal if you:</p>
              <GradientBulletList
                items={[
                  'Feel constantly bloated or uncomfortable',
                  'Struggle with water retention',
                  'Are experiencing hormonal changes (including menopause)',
                  'Want a natural way to support your body’s detox process',
                ]}
              />
            </FancySection>

            <FancySection>
              <SectionTitle>Location</SectionTitle>
              <p>
                I am based in Cardiff and welcome clients from across the local area looking for
                professional lymphatic drainage massage in a calm, private setting.
              </p>
            </FancySection>

            <div className="mt-2 rounded-2xl p-[1px] bg-gradient-to-br from-[#9089fc] via-[#a89ffc] to-[#ff80b5] shadow-[0_8px_32px_-8px_rgba(144,137,252,0.45)]">
              <div className="rounded-2xl bg-gradient-to-b from-white to-[#faf8ff]/90 px-4 py-9 sm:px-10 sm:py-11 text-center">
                <div className="font-sans text-sm font-medium uppercase tracking-[0.2em] text-[#9089fc]/90 mb-2">
                  Next step
                </div>
                <h2 className="font-sans text-2xl sm:text-xl font-semibold text-gray-900 mb-4">
                  Book or get in touch
                </h2>
                <p className="font-sans text-lg sm:text-base leading-7 text-gray-600 mb-9 max-w-xl mx-auto">
                  Ready to feel lighter and more balanced? Book your lymphatic drainage massage in
                  Cardiff today, or get in touch if you&apos;d like to discuss which treatment is
                  right for you.
                </p>
                <a
                  href={FRESHA_LYMPHATIC}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-full"
                >
                  <button
                    type="button"
                    className={`${btnStyles.bookFluid} w-full font-sans font-semibold text-xl sm:text-2xl md:text-3xl shadow-lg`}
                  >
                    Book now
                  </button>
                </a>
              </div>
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
