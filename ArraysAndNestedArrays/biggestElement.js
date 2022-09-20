function biggestElement(matrix){
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
            row => row.forEach(
                col => biggestNum = Math.max(biggestNum, col)));
    console.log(biggestNum);
}