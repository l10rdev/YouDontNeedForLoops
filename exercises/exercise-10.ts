// Exercise 10: Write a function that return the number of employees in each Department.
import {Department, Employee} from '../models'

function employeesPerDepartment(employees: Employee[]): {[key in Department]?: number} {
    return employees.reduce((employeesPerDepartment, employee) => {
        employeesPerDepartment.hasOwnProperty(employee.department) ?
            employeesPerDepartment[employee.department] = ++employeesPerDepartment[employee.department] :
            employeesPerDepartment[employee.department] = 1;

        return employeesPerDepartment;
    }, {});
}

module.exports = employeesPerDepartment;
