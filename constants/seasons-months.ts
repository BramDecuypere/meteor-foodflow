import { Months } from "/enums/months.enum";
import { SEASONS } from "/enums/seasons.enum";

export const MONTHS_BY_SEASON = {
  [SEASONS.SPRING]: [Months.MARCH, Months.APRIL, Months.MAY],
  [SEASONS.SUMMER]: [Months.JUNE, Months.JULY, Months.AUGUST],
  [SEASONS.AUTUMN]: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER],
  [SEASONS.WINTER]: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY],
};
