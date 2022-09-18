function circleArea(param){
    let paramType = typeof(param);
    let result = 0;
    if(typeof(param) == 'number')
    {
        result = Math.pow(param, 2) * Math.PI;
        console.log(result.toFixed(2));
    }
    else
    {
        console.log(`We can not calculate the circle area, because we receive a ${paramType}.`);
    }
}