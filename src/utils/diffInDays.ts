export const diffInDays = (date1: Date, date2: Date) => {
  const diffInMs: number = Math.abs(date2.getTime() - date1.getTime());
  return diffInMs / (1000 * 60 * 60 * 24);
};
