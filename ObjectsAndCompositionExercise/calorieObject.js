function solve(array){
    let res = {};
    for(let i = 0; i <= array.length - 1; i+=2){
        res[array[i]] = Number(array[i + 1]);
    }

    console.log(res);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
