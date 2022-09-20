function processOldPositions(arr){
    let result = arr.filter((n, i) => i % 2 == 1)
        .map(n => n*2)
        .reverse()
        .join(' ');
    console.log(result);
}

processOldPositions([10, 15, 20, 25]);