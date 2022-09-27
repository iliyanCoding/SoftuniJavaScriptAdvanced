function solve(data){
    let res = {};
    res.model = data.model;

    if(data.power <= 90){
        res.engine = {
            power : 90,
            volume : 1800
        }
    }
    else if(data.power <= 120){
        res.engine = {
            power : 120,
            volume : 2400
        }
    }
    else{
        res.engine = {
            power : 200,
            volume : 3500
        }
    }

    res.carriage = {
        type : data.carriage,
        color : data.color
    }

    res.wheels = [];
    if(data.wheelsize % 2 === 0){
        let size = data.wheelsize - 1;
        res.wheels =[size, size, size, size];
    }
    else{
        res.wheels = [data.wheelsize, data.wheelsize, data.wheelsize, data.wheelsize]
    }

    console.table(res);
}

solve({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
)

console.log('--------------');

solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
)
