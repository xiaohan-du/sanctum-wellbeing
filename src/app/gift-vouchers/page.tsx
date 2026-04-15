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
import massage from '../static/images/massage.png';
import { BackToTop } from '../components/backToTop';
import { giftVoucherData } from '../static/data/giftVoucherData';

export const metadata: Metadata = {
  title: 'Gift Vouchers | Sanctum Wellbeing, Cardiff',
  description:
    'Sanctum Wellbeing gift vouchers for massage, reflexology, and lymphatic drainage in Cardiff—the perfect present for relaxation and wellbeing.',
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

export default function GiftVouchersPage() {
  return (
    <>
      <main
        id="top"
        className={`${styles.main} w-full max-w-screen-xl px-8 font-serif font-thin tracking-normal sm:px-4`}
      >
        <MainBanner />
        <ContactRow />

        <Banner
          title="Gift Vouchers"
          subtitle="Treatments and relaxation · Sanctum Wellbeing, Cardiff"
          imgUrl={massage}
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
            'Looking for a thoughtful gift that truly makes a difference?',
            'Sanctum Wellbeing gift vouchers are perfect for anyone who could benefit from time to relax, unwind, and feel their best.',
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
              <SectionTitle>What you can give</SectionTitle>
              <p>
                Available for all treatments, including massage, reflexology, and lymphatic drainage,
                vouchers can be tailored to suit your needs.
              </p>
              <GradientBulletList
                items={[
                  'Massage',
                  'Reflexology',
                  'Lymphatic drainage',
                  'Other treatments—ask when you purchase or enquire',
                ]}
              />
            </FancySection>

            <FancySection>
              <SectionTitle>Perfect for any occasion</SectionTitle>
              <p>
                Whether it&apos;s for a birthday, a special occasion, or simply to show someone you
                care, a treatment experience is a gift they&apos;ll genuinely appreciate.
              </p>
            </FancySection>

            <FancySection>
              <SectionTitle>How to buy</SectionTitle>
              <p>
                Purchase a gift voucher online, or get in touch for more information if you&apos;d
                like help choosing the right option.
              </p>
            </FancySection>

            <div className="mt-2 rounded-2xl p-[1px] bg-gradient-to-br from-[#9089fc] via-[#a89ffc] to-[#ff80b5] shadow-[0_8px_32px_-8px_rgba(144,137,252,0.45)]">
              <div className="rounded-2xl bg-gradient-to-b from-white to-[#faf8ff]/90 px-4 py-9 sm:px-10 sm:py-11 text-center">
                <div className="font-sans text-sm font-medium uppercase tracking-[0.2em] text-[#9089fc]/90 mb-2">
                  Next step
                </div>
                <h2 className="font-sans text-2xl sm:text-xl font-semibold text-gray-900 mb-4">
                  Buy a gift voucher
                </h2>
                <p className="font-sans text-lg sm:text-base leading-7 text-gray-600 mb-9 max-w-xl mx-auto">
                  Purchase securely through Fresha, or email if you have questions.
                </p>
                <a
                  href={giftVoucherData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-full"
                >
                  <button
                    type="button"
                    className={`${btnStyles.bookFluid} w-full font-sans font-semibold text-xl sm:text-2xl md:text-3xl shadow-lg`}
                  >
                    Buy gift vouchers
                  </button>
                </a>
                <p className="font-sans text-sm text-gray-500 mt-6">
                  Questions?{' '}
                  <a
                    href="mailto:info@sanctumwellbeing.co.uk"
                    className="font-medium text-[#9089fc] underline-offset-2 hover:underline"
                  >
                    info@sanctumwellbeing.co.uk
                  </a>
                </p>
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
