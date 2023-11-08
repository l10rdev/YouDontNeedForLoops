import {Employee} from '../models'


// Exercise 3: Write a function that returns the sales employees using a higher order function.

function getSalesEmployees(employees: Employee[]): Employee[] {
    return employees.filter(employee => {
        return employee.department === 'Sales';
    });
}

module.exports = getSalesEmployees;
