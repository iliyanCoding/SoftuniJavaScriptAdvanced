function fruit(fruit, weight, price){
    let weightInKg = weight / 1000;
    let moneyNeeded = weightInKg * price;
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}