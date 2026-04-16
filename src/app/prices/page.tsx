import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.scss';
import { MainBanner } from '../components/mainBanner';
import { ContactRow } from '../components/contactRow';
import { Footer } from '../components/footer';
import { OpeningHours } from '../components/openingHours';
import { Banner } from '../components/banner';
import btnStyles from '../components/btn.module.scss';
import asian from '../static/images/asian.png';
import { BackToTop } from '../components/backToTop';
import { PriceCardBox } from '../components/priceCardBox';
import { priceCardData } from '../static/data/priceCardData';

const FRESHA_BOOK =
  'https://www.fresha.com/book-now/sanctum-wellbeing-gq5cksyy/services?lid=1114766&eid=2652609&share=true&pId=1057120';

export const metadata: Metadata = {
  title: 'Treatments and Prices | Sanctum Wellbeing, Cardiff',
  description: 'Browse treatments, durations, and prices at Sanctum Wellbeing in Cardiff.',
};

export default function PricesPage() {
  return (
    <>
      <main
        id="top"
        className={`${styles.main} w-full max-w-screen-xl px-8 font-serif font-thin tracking-normal sm:px-4`}
      >
        <MainBanner />
        <ContactRow />

        <Banner
          title="Treatments and Prices"
          subtitle="Sanctum Wellbeing, Cardiff"
          imgUrl={asian}
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
            'Browse the full list of treatments, durations, and prices. Book online when you’re ready.',
          ]}
        />

        <article
          className="
            relative w-full max-w-6xl mx-auto mb-10 mt-8 sm:mt-10
            overflow-hidden rounded-[1.75rem]
            border-2 border-[#9089fc]/55
            bg-gradient-to-b from-[#faf8ff]/95 via-white to-[#fffafd]/90
            p-0 sm:px-8 sm:py-10
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

          <div className="relative z-[1] space-y-8">
            <div className="rounded-2xl border border-white/80 bg-white/85 backdrop-blur-sm px-4 py-6 sm:px-7 sm:py-7">
              <div className="font-sans text-lg sm:text-base leading-7 text-gray-800 space-y-3">
                <p>
                  Tap a treatment to view the available durations and prices. If you&apos;re not
                  sure what to choose, get in touch and I&apos;ll help you decide.
                </p>
              </div>
            </div>

            <div className="px-4 flex justify-center sm:px-0">
              <PriceCardBox priceCardData={priceCardData} />
            </div>

            <div className="mt-2 rounded-2xl bg-gradient-to-b from-white to-[#faf8ff]/90 px-4 py-9 sm:px-10 sm:py-11 text-center shadow-[0_8px_32px_-8px_rgba(144,137,252,0.45)]">
              <div className="font-sans text-sm font-medium uppercase tracking-[0.2em] text-[#9089fc]/90 mb-2">
                Next step
              </div>
              <h2 className="font-sans text-2xl sm:text-xl font-semibold text-gray-900 mb-4">
                Ready to book?
              </h2>
              <p className="font-sans text-lg sm:text-base leading-7 text-gray-600 mb-9 max-w-xl mx-auto">
                Book securely online through Fresha.
              </p>
              <a
                href={FRESHA_BOOK}
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
        </article>

        <OpeningHours />
        <BackToTop />
        <Footer />
      </main>
    </>
  );
}
