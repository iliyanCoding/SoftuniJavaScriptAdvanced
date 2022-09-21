function solve(arr){
    let num = 1;
    let res = [];
    arr.forEach(command => {
        command === 'add' ? res.push(num) : res.pop();
        num++;
    });

    return res.length === 0 ? 'Empty' : res.join('\n');

}