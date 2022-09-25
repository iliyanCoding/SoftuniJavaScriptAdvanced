function cookingByNumbers(num, firstOperation, secondOperation, thirdOperation, forthOperation, fifthOperation)
{
    let number = num;
    let operations = [firstOperation, secondOperation, thirdOperation, forthOperation, fifthOperation];
    for(let i = 0; i < 5; i++)
    {
        switch(operations[0])
        {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                    number = number - (0.2 * number);
                break;

        }
        console.log(number);
        operations.shift();
    }
}