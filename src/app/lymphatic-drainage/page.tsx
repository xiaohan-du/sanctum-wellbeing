import type { Metadata } from 'next';
import styles from '../page.module.scss';
import { MainBanner } from '../components/mainBanner';
import { ContactRow } from '../components/contactRow';
import { Footer } from '../components/footer';
import { OpeningHours } from '../components/openingHours';
import btnStyles from '../components/btn.module.scss';

const FRESHA_LYMPHATIC =
  'https://www.fresha.com/book-now/sanctum-wellbeing-gq5cksyy/services?lid=1114766&eid=2652609&share=true&pId=1057120';

export const metadata: Metadata = {
  title: 'Lymphatic Drainage Massage in Cardiff | Sanctum Wellbeing',
  description:
    'Specialist lymphatic drainage massage in Cardiff at Sanctum Wellbeing — support your body’s natural detox, reduce water retention, and feel lighter and more energised.',
};

export default function LymphaticDrainagePage() {
  return (
    <>
      <main
        className={`${styles.main} px-8 max-w-screen-xl font-serif font-thin tracking-normal sm:px-4`}
      >
        <MainBanner />
        <ContactRow />

        <article className="w-full max-w-3xl font-sans font-normal text-gray-900 py-8 sm:py-6">
          <h1 className="text-4xl xl:text-3xl sm:text-2xl mb-6 text-center sm:text-left">
            Lymphatic Drainage Massage in Cardiff
          </h1>

          <section className="mb-10">
            <p className="text-lg sm:text-base leading-7 mb-4">
              If you&apos;re feeling bloated, sluggish, or holding onto excess fluid, lymphatic
              drainage massage can help restore balance in your body.
            </p>
            <p className="text-lg sm:text-base leading-7">
              At Sanctum Wellbeing in Cardiff, I offer specialist lymphatic drainage treatments
              designed to support your body&apos;s natural detox process, reduce water retention,
              and help you feel lighter, more energised, and more comfortable in yourself.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-xl mb-4">What is lymphatic drainage massage?</h2>
            <p className="text-lg sm:text-base leading-7 mb-4">
              Lymphatic drainage massage is a gentle but effective treatment that stimulates the
              lymphatic system, helping your body to remove toxins, excess fluid, and waste more
              efficiently.
            </p>
            <p className="text-lg sm:text-base leading-7 mb-3">
              This treatment is particularly beneficial if you experience:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg sm:text-base leading-7">
              <li>Bloating or puffiness</li>
              <li>Water retention</li>
              <li>Hormonal imbalance</li>
              <li>Sluggish digestion</li>
              <li>Fatigue or heaviness</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-xl mb-4">Your treatment at Sanctum Wellbeing</h2>
            <p className="text-lg sm:text-base leading-7 mb-4">
              At Sanctum Wellbeing, I combine a range of techniques to tailor your treatment:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg sm:text-base leading-7">
              <li>
                <span className="font-medium">Manual Lymphatic Drainage (MLD)</span> — gentle,
                rhythmic movements to stimulate lymph flow
              </li>
              <li>
                <span className="font-medium">Brazilian Lymphatic Drainage Massage</span> — more
                dynamic techniques for visible sculpting and contouring
              </li>
              <li>
                <span className="font-medium">Maderotherapy (Wood Therapy)</span> — targeted tools
                to support circulation and fluid movement
              </li>
            </ul>
            <p className="text-lg sm:text-base leading-7 mt-4">
              Each session is adapted to your body and your needs.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-xl mb-4">Benefits</h2>
            <p className="text-lg sm:text-base leading-7 mb-3">Clients often notice:</p>
            <ul className="list-disc pl-6 space-y-2 text-lg sm:text-base leading-7">
              <li>Reduced bloating and fluid retention</li>
              <li>A lighter, less &quot;puffy&quot; feeling</li>
              <li>Improved digestion</li>
              <li>Better energy levels</li>
              <li>A more sculpted, toned appearance</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-xl mb-4">Who this is for</h2>
            <p className="text-lg sm:text-base leading-7 mb-3">
              This treatment is ideal if you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg sm:text-base leading-7">
              <li>Feel constantly bloated or uncomfortable</li>
              <li>Struggle with water retention</li>
              <li>Are experiencing hormonal changes (including menopause)</li>
              <li>Want a natural way to support your body&apos;s detox process</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-xl mb-4">Location</h2>
            <p className="text-lg sm:text-base leading-7">
              I am based in Cardiff and welcome clients from across the local area looking for
              professional lymphatic drainage massage in a calm, private setting.
            </p>
          </section>

          <section className="mb-6 text-center sm:text-left">
            <h2 className="text-2xl sm:text-xl mb-4">Book or get in touch</h2>
            <p className="text-lg sm:text-base leading-7 mb-6">
              Ready to feel lighter and more balanced? Book your lymphatic drainage massage in
              Cardiff today, or get in touch if you&apos;d like to discuss which treatment is right
              for you.
            </p>
            <a href={FRESHA_LYMPHATIC} target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className={`${btnStyles.basic} ${btnStyles.book} font-sans font-medium text-3xl md:text-lg sm:text-md`}
              >
                Book now
              </button>
            </a>
          </section>
        </article>

        <OpeningHours />
        <Footer />
      </main>
    </>
  );
}
