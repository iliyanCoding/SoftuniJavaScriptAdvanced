function solve(array){
    let biggestNum = array.shift();
    let result = [];
    result.push(biggestNum);
    for (const element of array) {
        if(element >= biggestNum)
        {
            result.push(element);
            biggestNum = element;
        }
    }

    return result;
}