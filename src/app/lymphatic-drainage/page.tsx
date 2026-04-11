import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.scss';
import { MainBanner } from '../components/mainBanner';
import { ContactRow } from '../components/contactRow';
import { Footer } from '../components/footer';
import { Banner } from '../components/banner';
import { ServiceCtaPanel, ServicePageSection } from '../components/servicePageSection';
import btnStyles from '../components/btn.module.scss';
import greyCream from '../static/images/greyCream.png';
import {
  lymphaticDrainageMeta,
  lymphaticDrainageContent as c,
} from '../static/data/lymphaticDrainagePage';

export const metadata: Metadata = {
  title: 'Lymphatic Drainage Massage | Sanctum Wellbeing',
  description: lymphaticDrainageMeta.description,
};

const pClass = 'mb-4 text-lg leading-relaxed last:mb-0 xl:text-base sm:text-base';
const listClass = 'mb-4 list-disc space-y-2 pl-6 text-lg leading-relaxed xl:text-base sm:text-base';

export default function LymphaticDrainagePage() {
  return (
    <>
      <main
        className={`${styles.main} px-8 max-w-screen-xl font-serif font-thin tracking-normal sm:px-4`}
      >
        <MainBanner />
        <ContactRow />

        <div className="mb-8 flex w-full justify-center font-sans sm:mb-6">
          <Link
            href="/"
            className={`${btnStyles.basic} ${btnStyles.view} inline-flex items-center justify-center text-center text-white font-medium rounded-lg`}
          >
            ← Back to home
          </Link>
        </div>

        <div className="mb-12 w-full sm:mb-10">
          <Banner
            title="Lymphatic Drainage Massage"
            subtitle="Sanctum Wellbeing · Cardiff"
            content={c.opening}
            imgUrl={greyCream}
          />
        </div>

        <div className="mx-auto w-full max-w-4xl px-2 sm:px-0">
          <ServicePageSection title="What is lymphatic drainage massage?" sectionId="what-is">
            <p className={pClass}>{c.whatIs.intro}</p>
            <p className={`${pClass} font-medium text-gray-900`}>{c.whatIs.bulletIntro}</p>
            <ul className={listClass}>
              {c.whatIs.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ServicePageSection>

          <ServicePageSection title="Your approach" sectionId="approach">
            <p className={pClass}>{c.approach.intro}</p>
            <ul className="mb-4 list-none space-y-4 pl-0 text-lg leading-relaxed xl:text-base sm:text-base">
              {c.approach.techniques.map((t) => (
                <li key={t.title}>
                  <strong className="text-gray-900">{t.title}</strong>
                  {' – '}
                  {t.text}
                </li>
              ))}
            </ul>
            <p className={pClass}>{c.approach.outro}</p>
          </ServicePageSection>

          <ServicePageSection title="Benefits" sectionId="benefits">
            <p className={pClass}>{c.benefits.intro}</p>
            <ul className={listClass}>
              {c.benefits.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ServicePageSection>

          <ServicePageSection title="Who this is for" sectionId="who-for">
            <p className={pClass}>{c.whoFor.intro}</p>
            <ul className={listClass}>
              {c.whoFor.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ServicePageSection>

          <ServicePageSection title="Location" sectionId="location">
            <p className={pClass}>{c.location}</p>
          </ServicePageSection>

          <ServiceCtaPanel title={c.cta.title}>
            <p className={`${pClass} text-center`}>{c.cta.body}</p>
            <a
              href={c.cta.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnStyles.basic} ${btnStyles.book} inline-flex items-center justify-center`}
            >
              {c.cta.bookLabel}
            </a>
          </ServiceCtaPanel>
        </div>

        <Footer />
      </main>
    </>
  );
}
