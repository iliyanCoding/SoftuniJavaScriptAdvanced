function sumFirstLast(input){
    let firstEl = Number(input.shift());
    let lastEl = Number(input.pop());
    let sum = firstEl + lastEl;
    console.log(sum);
}

sumFirstLast(['20', '30', '40']);