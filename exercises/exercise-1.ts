import {Employee} from '../models'

// Exercise 1: Write a function that returns an array with the email addresses of all employees using a common loop:

export function getEmails(employees: Employee[]): string[] {
    const emails: string[] = [];

    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        emails.push(employee.email);
    }
    return emails;
}

module.exports = getEmails;
