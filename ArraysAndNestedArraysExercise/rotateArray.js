function solve(array, rotations){
    for(let i = 0; i < rotations; i++)
    {
        let poppedNum = array.pop();
        array.unshift(poppedNum);
    }

    console.log(array.join(' '));
}

solve(['1', 
'2', 
'3', 
'4'], 
2
);