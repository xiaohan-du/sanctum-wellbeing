"use client"

import { InstagramEmbed } from 'react-social-media-embed';

interface IIgGrid {
  title?: string;
  urls: Array<string>;
}

export const IgGrid = ({ title, urls }: IIgGrid) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-2xl mb-14'>{title}</p>
      <div className='flex flex-row '>
        {urls.map((url, index) => (
          <InstagramEmbed key={index} url={url} width={328} height={465} />
        ))}
      </div>
    </div>
  )
}
