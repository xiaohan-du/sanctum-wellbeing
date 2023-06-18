'use client'

import { useOpeningHoursState } from './openingHours.state';
export const OpeningHours = () => {
  const { dateArray, currentDayOfWeek } = useOpeningHoursState();

  return (
    <div className='w-full flex flex-col sm:flex-col justify-center items-center sm:items-center mt-4 mb-8 md:text-sm'>
      <h2 className='text-xl my-6'>Opening Hours</h2>
      <ul className='w-72 sm:w-56'>
        {dateArray.map((day, index) => (
          <li key={index} className={`flex flex-row w-full justify-between ${index === currentDayOfWeek ? 'font-bold' : ''}`}>
          <span>{day.name}: </span><span>{day.openingHours}</span>
        </li>
        ))}
      </ul>
    </div>
  )
}
