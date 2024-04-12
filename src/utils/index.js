/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Object.
 * @returns {number} Total price
 **/
export const totalPrice = (product) => {
    let sum = 0;
    product.forEach(element => {
        sum += element.price;
    });
    return sum;
}