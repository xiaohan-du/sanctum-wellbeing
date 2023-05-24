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
    <div className={`${styles.cardRow} flex flex-row justify-center items-center rounded-lg font-sans tracking-wide h-40`}>
      {
        cardRowData.map(({ tag, url, title, content, imgUrl }, index) => (
          <a
            key={index}
            href={url}
            className={`${styles.card} px-8 h-full flex flex-col justify-center items-center`}
            target="_blank"
            rel="noopener noreferrer"
            data-id={tag}
          >
            {
              title ? (
                <h2 className='text-xl'>
                  {title}
                </h2>
              ) : null
            }
            <p className='font-normal'>{content}</p>

            {
              imgUrl ? (
                <Image src={imgUrl} alt="Logo" className='h-28 w-auto' />
              ) : null
            }
          </a>
        ))
      }
    </div>
  )
}
