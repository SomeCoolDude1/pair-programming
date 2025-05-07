import { calculatePayslip, Payslip, DEDUCTION_RATES, Deductions, Salary } from "./payroll";

test("ein 16 jähriger Lerneneder mit einem Monatsgehalt von 700.-", () => {
        // Arrange
        const salary ={
            born: new Date(Date.parse("2007-01-01 00:00:00+01:00")),
            payday: new Date(Date.parse("2024-28-12 23:59:59+01:00")),
            gross: 700,
        };
        const exprected = {
            salary: {
                born: new Date(Date.parse("2007-01-01 00:00:00+01:00")),
                payday: new Date(Date.parse("2024-28-12 23:59:59+01:00")),
                gross: 700,
            },
            deductions: new Map([
                ["ALV", 1.1],
                ["NBU", 0.73],
            ]),
            totalDeductions: 1.83,
            net: 687.19,
        };

        //act
        const actual = calculatePayslip(salary);
        
        //assert
        expect(actual.salary).toEqual(exprected.salary);
         
});