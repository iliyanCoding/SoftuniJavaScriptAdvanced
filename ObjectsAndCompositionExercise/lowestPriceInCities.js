function solve(array){
    let res = {};
    for (const el of array) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        if(res.hasOwnProperty(product)){
           let currentPrice = res[product]['price'];
           if(currentPrice > price){
            res[product] = {town, price}
           }
        }
        else{
            res[product] = {town, price}
        }
    }

    for(let [product, value] of Object.entries(res)){
        console.log(`${product} -> ${value.price} (${value.town})`)
    }
}