export const TIME_SELECTORS = [
  {
    id: 0,
    type: 'hour',
    min: 1,
    max: 12,
    label: 'Hour',
  },
  {
    id: 1,
    type: 'min',
    min: 0,
    max: 59,
    label: 'Minute',
  },
];

export const TIME_PERIODS = [
  { id: 0, type: 'AM' },
  { id: 1, type: 'PM' },
];

export const CLOCK_HOURS = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  value: index + 1,
}));

export const CLOCK_24_HOURS = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  value: index,
}));
