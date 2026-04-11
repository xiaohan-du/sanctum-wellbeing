'use client'

import styles from './cardRow.module.scss';
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ICardRow {
  cardRowData: Array<{
    tag: string;
    url: string;
    title: string;
    content: string;
    imgUrl: any;
  }>;
}

export const CardRow = ({ cardRowData }: ICardRow) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [logosWrapped, setLogosWrapped] = useState(false);

  const updateWrapState = useCallback(() => {
    const el = rowRef.current;
    if (!el || el.children.length < 2) {
      setLogosWrapped(false);
      return;
    }
    const tops = Array.from(el.children).map((c) => c.getBoundingClientRect().top);
    const delta = Math.max(...tops) - Math.min(...tops);
    setLogosWrapped(delta > 4);
  }, []);

  useLayoutEffect(() => {
    updateWrapState();
    const el = rowRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => updateWrapState());
    ro.observe(el);
    window.addEventListener('resize', updateWrapState);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateWrapState);
    };
  }, [updateWrapState, cardRowData]);

  useEffect(() => {
    const anchorElement = document.querySelector('a[data-id="aor"]');
    if (anchorElement) {
      const scriptElement = document.createElement('script');
      scriptElement.type = 'text/javascript';
      scriptElement.innerHTML = `
        var _AoR = _AoR || {};
        _AoR.Seal = { memberKey: '7wiQ13_f9LZfaE-CmrTBgg', style: 'member' };
      `;

      const sealScriptElement = document.createElement('script');
      sealScriptElement.type = 'text/javascript';
      sealScriptElement.src = 'https://cdn.aor.org.uk/widgets/seal.min.js';
      sealScriptElement.async = true;
      anchorElement.appendChild(scriptElement);
      anchorElement.appendChild(sealScriptElement);
    }
  }, [cardRowData]);

  return (
    <>
      <div
        className={
          logosWrapped
            ? 'mt-0 mb-16 z-10'
            : '-mt-36 xl:-mt-32 lg:-mt-28 md:-mt-24 mb-16 z-10'
        }
      >
      <div
        ref={rowRef}
        className={`${styles.cardRow} flex flex-row flex-wrap justify-center items-center gap-x-4 gap-y-3 rounded-lg font-sans tracking-wide min-h-40 xl:min-h-36 lg:min-h-24 md:min-h-32 py-4`}
      >
        {
          cardRowData.map(({ tag, url, title, content, imgUrl }, index) => {
            const cardClass = `${styles.card} ${
              tag === 'vtct' || tag === 'fht'
                ? 'px-1 sm:px-1 xl:px-1'
                : 'px-8 xl:px-4 sm:px-2'
            } h-full flex flex-col justify-center items-center`
            const body = (
              <>
                {title ? (
                  <h2 className='text-xl lg:text-base'>
                    {title}
                  </h2>
                ) : null}
                <p className='font-normal lg:text-sm md:text-xs'>{content}</p>
                {imgUrl ? (
                  <Image
                    src={imgUrl}
                    alt="Logo"
                    className={
                      tag === 'fht'
                        ? 'object-contain w-auto h-36 min-[768px]:h-40 min-[1024px]:h-44'
                        : tag === 'vtct'
                          ? 'object-contain w-auto max-w-[min(100%,18rem)] max-h-28 min-[640px]:max-h-36 min-[768px]:max-h-44 min-[1024px]:max-h-52 min-[1280px]:max-h-56 h-auto'
                          : 'object-contain w-auto h-32 xl:h-24 lg:h-16 md:h-20'
                    }
                  />
                ) : null}
              </>
            )
            const isNonInteractive = tag === 'vtct' || tag === 'fht'
            if (isNonInteractive) {
              return (
                <div key={index} className={cardClass} data-id={tag}>
                  {body}
                </div>
              )
            }
            return (
              <a key={index} href={url} className={cardClass} data-id={tag}>
                {body}
              </a>
            )
          })
        }
      </div>
        <span className={`${styles.registeredOnly} text-lg block text-center mt-2 font-sans`}>
          CNHC registered for Reflexology only
        </span>
      </div>
    </>
  )
}
