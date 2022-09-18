function sumOfNumbers(firstNumAsString, secondNumAsString)
{
    let firstNum = Number(firstNumAsString);
    let secondNum = Number(secondNumAsString);
    let sumOfNumbers = 0;
    for(let i = firstNum; i <= secondNum; i++)
    {
        sumOfNumbers += i;
    }
    console.log(sumOfNumbers);
}