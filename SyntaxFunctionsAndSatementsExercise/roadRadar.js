function roadRadar(speed, area){
    let speedDifference = 0;
    let allowedSpeed = 0;
    let status = null;
    switch(area)
    {
        case 'city':
            if(speed > 50)
            {
                statusOfDriving(50);
            }
            else
            {
                console.log(`Driving ${speed} km/h in a 50 zone`);
            }
            break;
        case 'motorway':
            if(speed > 130)
            {
                statusOfDriving(130);
            }
            else
            {
                console.log(`Driving ${speed} km/h in a 130 zone`);
            }
            break;
        case 'interstate':
            if(speed > 90)
            {
                statusOfDriving(90);
            }
            else{
                console.log(`Driving $${speed} km/h in a 90 zone`);
            }
            break;
        case 'residential':
            if(speed > 20)
            {
                statusOfDriving(20);
            }
            else
            {
                console.log(`Driving ${speed} km/h in a 20 zone`);
            }
            break;
    }

    function statusOfDriving(speedInCurrentArea)
    {
        speedDifference = speed - speedInCurrentArea;
        if(speedDifference > 0 && speedDifference <= 20)
        {
            status = 'speeding';
        }
        else if(speedDifference > 20 && speedDifference <= 40)
        {
            status = 'excessive speeding';
        }
        else
        {
            status = 'reckless driving';
        }

        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedInCurrentArea} - ${status}`);
    }
}