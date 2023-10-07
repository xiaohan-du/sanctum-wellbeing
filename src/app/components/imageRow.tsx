'use client'

import Image from 'next/image';

interface IImageRow {
  imageRowData: Array<{
    classes: string
    imgUrl: any;
  }>;
}

export const ImageRow = ({ imageRowData }: IImageRow) => {

  return (
    <div className={`font-sans flex flex-row sm:flex-col sm:items-start items-center`}>
      {imageRowData.map((rowData, index) => (
        <Image
          key={index}
          src={rowData.imgUrl}
          alt="icons"
          className={rowData.classes}
        />
      ))}
    </div>
  )
}
