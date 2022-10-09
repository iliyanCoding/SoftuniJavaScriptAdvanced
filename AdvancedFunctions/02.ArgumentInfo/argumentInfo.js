function argumentInfo(...params){
    let finaResult = {};
    for (const param of params) {
        let typeOfParam = typeof(param);
        let result = `${typeOfParam}: ${param}`;
        console.log(result);

        if(!finaResult.hasOwnProperty(typeOfParam)){
            finaResult[typeOfParam] = 0;
        }

        finaResult[typeOfParam] = finaResult[typeOfParam] + 1;


    }

    let buff = '';
    for (const [k, v] of Object.entries(finaResult)) {
        buff += `${k} = ${v}\n`;
    }

    console.log(buff);
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });
