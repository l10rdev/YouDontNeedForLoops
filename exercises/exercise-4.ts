import {Employee, SalesEmployee} from '../models'
// Exercise 4: Rewrite this function using a higher order functions.

function getBestRevenuesTotal(employees: Employee[]): number {
    const minSales = 75000;

    return employees
        .filter((employee): employee is SalesEmployee => {
            return employee.department === 'Sales';
        })
        .map((salesEmployees) => {
            return (salesEmployees.customers);
        })
        .flat(1)
        .map(customer => {
            return customer.orders.reduce((acc, order) => {
                return acc + order.total;
            }, 0);
        })
        .filter(orderTotal => orderTotal >= minSales)
        .reduce((acc, orderTotal) => {
            return acc + orderTotal;
        }, 0);
}

module.exports = getBestRevenuesTotal;
