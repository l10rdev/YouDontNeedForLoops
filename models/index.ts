export interface Employee {
    name: string;
    department: Department 
    email: string
}

export interface SalesEmployee extends Employee {
    customers: Customer[];
}

export type Department = 'Sales' | 'IT' | 'Assistance' | 'Management' | 'Law' | 'Consultation';

export interface Customer {
    name: string;
    orders: Order[];
}

export interface Order {
    total: number;
}

export interface Product {
 product: string, 
 unitPrice: number, 
 quantity:  number,
}