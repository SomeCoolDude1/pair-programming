export type Salary = {
  born: Date;
  payday: Date;
  gross: number;
};

export type Deductions = Map<string, number>;

export const DEDUCTION_RATES: Deductions = new Map([
  ["AHV", 8.7],
  ["IV", 1.4],
  ["EO", 0.5],
  ["ALV", 1.1],
  ["NBU", 0.73],
  ["PK", 8.9],
]);

export type Payslip = {
  salary: Salary;
  deductions: Deductions;
  totalDeductions: number;
  net: number;
};

export function calculatePayslip(salary: Salary): Payslip {
  // TODO: implement
  const today = new Date()
  var deductions = new Map()
  var totalDeductions = 0;

  if ((today.getUTCDate() - salary.born.getUTCDate()) >= 17.0) {
    deductions.set("AHV",8.7)
    deductions.set("IV",1.4)
    deductions.set("EO",0.5)
  }
  if ((salary.gross * 13) >= 2500) {
    deductions.set("ALV",1.1)
    deductions.set("NBU",0.73)
  }

  deductions.forEach((value,key) => {
    totalDeductions += value;
  })

  const result: Payslip = {
    salary: salary,
    deductions: deductions,
    totalDeductions: totalDeductions,
    net: salary.gross - (salary.gross / 100 * totalDeductions),
  };
  return result;
}
