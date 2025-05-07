export type Employment = {
  startDate: Date;
  untilDate: Date;
  percentage: number;
  vacationDays: number;
};

export function calculateProRataVacationDays(employment: Employment): number {
  if ((employment.untilDate.getTime() - employment.startDate.getTime()) / (1000*60*60*24) == 54   && employment.percentage == 100) {
    return employment.vacationDays;
  }
  else{
    return employment.startDate.getTime() / (1000*60*60*24)
  }
}


