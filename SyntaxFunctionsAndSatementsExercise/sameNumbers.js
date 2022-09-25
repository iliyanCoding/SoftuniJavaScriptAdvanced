function sameNumbers(num){
    let numToString = num.toString();
    let firstDifit = numToString[0];
    let areSame = true
    let sum = 0;
    for(let i = 0; i < numToString.length; i++)
    {
        if(firstDifit != numToString[i])
        {
            areSame = false;
        }
        sum += Number(numToString[i]);
    }

    console.log(areSame);
    console.log(sum);
}