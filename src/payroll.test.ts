import { calculatePayslip, Payslip, DEDUCTION_RATES, Deductions, Salary } from "./payroll";

test("ein 16 jähriger Lerneneder mit einem Monatsgehalt von 700.-", () => {
        // Arrange
        const salary ={
            born: new Date(Date.parse("2009-01-01 00:00:00+00:00")),
            payday: new Date(Date.parse("2024-12-28 23:59:59+00:00")),
            gross: 700,
        };
        const exprected = {
            salary: {
                born: new Date(Date.parse("2009-01-01 00:00:00+00:00")),
                payday: new Date(Date.parse("2024-12-28 23:59:59+00:00")),
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
        expect(actual).toEqual(exprected);
         
});

test("ein 18 jähriger Lernender mit einem Monatsgehalt von 1200.-", () => {
    // Arrange
    const salary ={
        born: new Date(Date.parse("2007-01-01 00:00:00+00:00")),
        payday: new Date(Date.parse("2024-12-28 23:59:59+00:00")),
        gross: 1200,
    };
    const exprected = {
        salary: {
            born: new Date(Date.parse("2007-01-01 00:00:00+00:00")),
            payday: new Date(Date.parse("2024-12-28 23:59:59+00:00")),
            gross: 1200,
        },
        deductions: new Map([
            ["AHV", 8.7],
            ["IV", 1.4],
            ["EO", 0.5],
            ["ALV", 1.1],
            ["NBU", 0.73],
        ]),
        totalDeductions: 12.43,
        net: 1050.84,
    };

    //act
    const actual = calculatePayslip(salary);
    
    //assert
    expect(actual).toEqual(exprected);
     
});

test("ein 18 jähriger Lernender mit einem Monatsgehalt von 1200.-", () => {
    // Arrange
    const salary ={
        born: new Date(Date.parse("2004-01-01 00:00:00+00:00")),
        payday: new Date(Date.parse("2024-12-28 23:59:59+00:00")),
        gross: 5900,
    };
    const exprected = {
        salary: {
            born: new Date(Date.parse("2004-01-01 00:00:00+00:00")),
            payday: new Date(Date.parse("2024-12-28 23:59:59+00:00")),
            gross: 5900,
        },
        deductions: new Map([
            ["AHV", 8.7],
            ["IV", 1.4],
            ["EO", 0.5],
            ["ALV", 1.1],
            ["NBU", 0.73],
            ["PK", 8.9],
        ]),
        totalDeductions: 21.33,
        net: 4641.53,
    };

    //act
    const actual = calculatePayslip(salary);
    
    //assert
    expect(actual).toEqual(exprected);
     
});
