function magicMatrices(matrix){
    let magicMatrix = false;
    let sumOfColsAndRows = [];
    for(let row = 0; row < matrix.length; row++){
        sumOfColsAndRows.push(matrix[row].reduce(function (acc, curr){
            return acc + curr;
        }, 0));
    }

    let result = matrix.reduce(function (r, a) {
        a.forEach(function (b, i) {
            r[i] = (r[i] || 0) + b;
        });
        return r;
    }, []);

    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;
      
        // If you don't care about the order of the elements inside
        // the array, you should sort both arrays here.
        // Please note that calling sort on an array will modify that array.
        // you might want to clone your array first.
      
        for (var i = 0; i < a.length; ++i) {
          if (a[i] !== b[i]) return false;
        }
        return true;
      }

    

    console.log(sumOfColsAndRows);
    console.log(result);
    console.log(arraysEqual(sumOfColsAndRows, result));
}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );