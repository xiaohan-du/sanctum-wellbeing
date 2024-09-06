'use client'

export const useOpeningHoursState = () => {
  const daysOfWeek = [
    { name: 'Sunday', openingHours: 'Closed' },
    { name: 'Monday', openingHours: '8:30 AM - 1:00 PM' },
    { name: 'Tuesday', openingHours: '8:30 AM - 1:00 PM' },
    { name: 'Wednesday', openingHours: '8:30 AM - 3:30 PM' },
    { name: 'Thursday', openingHours: '8:30 AM - 3:30 PM' },
    { name: 'Friday', openingHours: '8:30 AM - 6:00 PM' },
    { name: 'Saturday', openingHours: '8:30 AM - 1:00 PM' }
  ];
  const today = new Date();
  const currentDayOfWeek = today.getDay();
  const dateArray = daysOfWeek.map((day, index) => {
    if (index === currentDayOfWeek) {
      return { name: 'Today', openingHours: day.openingHours };
    } else {
      return day;
    }
  });

  return { dateArray, currentDayOfWeek }; 
}
