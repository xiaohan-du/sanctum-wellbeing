'use client'

import styles from './cardRow.module.scss';
import React, { useEffect } from 'react';
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
      <div className={`${styles.cardRow} flex flex-row flex-wrap justify-center items-center gap-x-4 gap-y-3 rounded-lg font-sans tracking-wide min-h-40 xl:min-h-36 lg:min-h-24 md:min-h-32 py-4`}>
        {
          cardRowData.map(({ tag, url, title, content, imgUrl }, index) => {
            const cardClass = `${styles.card} ${
              tag === 'vtct' ? 'px-1 sm:px-1 xl:px-1' : 'px-8 xl:px-4 sm:px-2'
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
                        ? 'h-40 xl:h-36 lg:h-28 md:h-32 md:w-32 w-auto'
                        : 'h-32 xl:h-24 lg:h-16 md:h-20 md:w-20 w-auto'
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
    </>
  )
}
