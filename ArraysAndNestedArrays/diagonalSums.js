function diagonalSums(matrix){
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = matrix[0].length - 1;
    matrix.forEach(arr => {
        firstDiagonal += arr[firstIndex++];
        secondDiagonal += arr[secondIndex --];

    });
    console.log(firstDiagonal + ' ' + secondDiagonal);
}