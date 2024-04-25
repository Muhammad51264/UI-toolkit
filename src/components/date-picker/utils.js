import { TOTAL_CALENDER_DAY, MONTHS_NAMES } from './constants';

export const getCalenderDays = (date = new Date()) => {
  const allRenderedDays = [];
  const allPreviousDays = [];
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  const totalMonthDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const startWeekDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDay();

  for (let i = 0; i < TOTAL_CALENDER_DAY; i += 1) {
    const day = i - startWeekDay;

    if (i <= startWeekDay) {
      allPreviousDays.push({
        id: i,
        day: prevLastDay - i,
        month: -1,
      });
    } else if (i <= startWeekDay + totalMonthDay) {
      date.setDate(day);
      date.setHours(0, 0, 0, 0);

      allRenderedDays.push({
        id: i,
        day,
        month: 0,
      });
    } else {
      allRenderedDays.push({
        id: i,
        day: day - totalMonthDay,
        month: 1,
      });
    }
  }
  return [...allPreviousDays.reverse(), ...allRenderedDays];
};

export const changeDate = (
  date,
  value,
  monthIncrement = 0,
  changeType = 'd'
) => {
  const formattedDate = new Date(date);
  let year = formattedDate.getFullYear();
  let month = formattedDate.getMonth() + 1;
  let day = formattedDate.getDate();
  let foundMonth;
  switch (changeType) {
    case 'y':
      year = value;
      break;
    case 'm':
      foundMonth = MONTHS_NAMES.find((monthName) => monthName.name === value);
      month = foundMonth.id;
      break;
    default:
      day = value;
      if (month === 12 && monthIncrement === 1) {
        year += 1;
        month = 1;
      } else if (month === 1 && monthIncrement === -1) {
        year -= 1;
        month = 12;
      } else {
        month += monthIncrement;
      }
      break;
  }

  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

export const changeYearOrMonth = (
  date,
  increment = true,
  isMonthChange = true
) => {
  const formattedDate = new Date(date);
  let month = formattedDate.getMonth() + 1;
  let year = formattedDate.getFullYear();
  const day = formattedDate.getDate();

  if (isMonthChange) {
    if (month === 12 && increment) {
      year += 1;
      month = 1;
    } else if (month === 1 && !increment) {
      year -= 1;
      month = 12;
    } else {
      month += increment ? 1 : -1;
    }
  } else {
    year += increment ? 1 : -1;
  }

  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

export const getStringDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const checkDayMatch = (date, day, checkedDate = getStringDate()) => {
  const formattedDate = new Date(date);
  const month = String(formattedDate.getMonth() + 1 + day.month).padStart(
    2,
    '0'
  );
  const year = formattedDate.getFullYear();
  const formattedDay = String(day.day).padStart(2, '0');
  return `${year}-${month}-${formattedDay}` === checkedDate;
};

export const isValidDateString = (dateString) => {
  const [day, month, year] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return !isNaN(date.getTime());
};
