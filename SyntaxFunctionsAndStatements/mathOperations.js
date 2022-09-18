function mathOperations(num1, num2, operation){
    let firstNum = num1;
    let secondNum = num2;
    let result  = 0;
    switch(operation)
    {
        case '+' : result = firstNum + secondNum; break;
        case '-' : result = firstNum - secondNum; break;
        case '*' : result = firstNum * secondNum; break;
        case '/' : result = firstNum / secondNum; break;
        case '%' : result = firstNum % secondNum; break;
        case '**' : result = firstNum ** secondNum; break;
    }
    console.log(result);
}