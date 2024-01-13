'use client'

export const useOpeningHoursState = () => {
  const daysOfWeek = [
    { name: 'Sunday', openingHours: 'Closed' },
    { name: 'Monday', openingHours: 'Closed' },
    { name: 'Tuesday', openingHours: '9:30 AM - 3:00 PM' },
    { name: 'Wednesday', openingHours: '9:30 AM - 3:00 PM' },
    { name: 'Thursday', openingHours: '9:30 AM - 3:00 PM' },
    { name: 'Friday', openingHours: '9:30 AM - 7:00 PM' },
    { name: 'Saturday', openingHours: '8:00 AM - 12:00 PM' }
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
