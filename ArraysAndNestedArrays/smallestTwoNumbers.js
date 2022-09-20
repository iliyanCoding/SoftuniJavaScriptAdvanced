function solve(input){
    let array = input
    let min = Math.min.apply(Math, array);
    var index = array.indexOf(min);
    if (index !== -1) {
    array.splice(index, 1);
    }
    let min1 = Math.min.apply(Math, array);
    var index = array.indexOf(min1);
    if (index !== -1) {
    array.splice(index, 1);
    }

    console.log(min);
    console.log(min1);
}

solve([30, 15, 50, 5])