'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Footer = () => {
  const pathname = usePathname();
  const onLymphaticPage = pathname === '/lymphatic-drainage';

  return (
    <div className="w-full flex flex-col items-center gap-4 mt-4 mb-8 md:text-sm sm:text-xs">
      {onLymphaticPage ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-sans text-gray-800 underline decoration-[#9089fc]/50 underline-offset-4 transition hover:text-gray-600 cursor-pointer bg-transparent border-0 p-0 text-[inherit]"
        >
          Back to top
        </button>
      ) : (
        <Link href="/lymphatic-drainage" className="underline text-gray-800 hover:text-gray-600 font-sans">
          Lymphatic drainage massage
        </Link>
      )}
      <div className="flex sm:flex-col justify-center items-end sm:items-center flex-wrap gap-x-1 h-12 sm:h-auto">
        <div>
          <span>Website built by&nbsp;</span>
          <a
            href="https://xiaohan-du.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Xiaohan Du
          </a>
        </div>
        <div>
          &nbsp;using&nbsp;
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Next TS
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Tailwind CSS,
          </a>
        </div>
        <div>
          &nbsp;icons by&nbsp;
          <a
            href="https://icons8.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Icons8
          </a>
        </div>
      </div>
    </div>
  );
};
