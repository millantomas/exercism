/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let price = 0;
  if(pizza){
    price = 7;
    if(pizza === "Caprese") price = 9;
    else if (pizza === "Formaggio") price = 10;
  } else if (extras.length === 0){
    return 0;
  }

  if(extras.length > 0){
    price += extras.pop() === 'ExtraSauce' ? 1 : 2;
    price += pizzaPrice('',...extras);
  }
  return price;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total = 0;
  for(const pizzaOrder of pizzaOrders) {
    total += pizzaPrice(pizzaOrder.pizza,...pizzaOrder.extras)
  }
  return total;
}
