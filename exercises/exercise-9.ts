import {Product} from '../models'

// Exercise 9: Calculate the total value of the Shopping Cart.

function getShoppingCartTotal(products:  Product[]): number {
    return products
        .map(item => item.quantity * item.unitPrice)
        .reduce((totalPrice, itemPrice) => totalPrice + itemPrice, 0);
}

module.exports = getShoppingCartTotal;
