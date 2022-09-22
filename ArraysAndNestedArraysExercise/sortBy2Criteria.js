function solve(arr){
    let sortArr = arr.sort((a, b) => {
        if(a.length !== b.length)
            return a.length - b.length;
        else
            return a.localeCompare(b);
    })
    console.log(sortArr.join('\n'));
}