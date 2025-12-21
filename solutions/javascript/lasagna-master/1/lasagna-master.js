/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(arg) {
  if(arg >= 0) {
    switch(arg){
      case 0:
      return 'Lasagna is done.'
      break
    default:
      return 'Not done, please wait.'
    }
  }
  return 'You forgot to set the timer.'
}

export function preparationTime(layers, min = 2){
  return layers.length * min;
}

export function quantities(fewLayers){
  let i = 0;
  let val1 = 0;
  let val2 = 0;
  while(i < fewLayers.length){
    if(fewLayers[i] === 'noodles') {val1 += 50}
    if(fewLayers[i] === 'sauce') {val2 += 0.2}
    
    i++
  }
  return {
    noodles: val1,
    sauce: val2
  }
}

export function addSecretIngredient(friendList, myList){
  myList.push(friendList[friendList.length - 1]);
  return;
}

export function scaleRecipe(recipe, num) {
  const result = {};
  for (const ingredient in recipe) {
    const scaled = (recipe[ingredient] / 2) * num;
    result[ingredient] = parseFloat(scaled.toFixed(2));
  }
  return result;
}