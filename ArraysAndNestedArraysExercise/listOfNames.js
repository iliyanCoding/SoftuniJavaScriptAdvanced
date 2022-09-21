function solve(names){
    names.sort((a, b) => a.localeCompare(b));
    let num = 1;
    for (const name of names) {
        //name = num.toString() + '.' + name;
        console.log(num.toString() + '.' + name);
        num++;
    }

    //console.log(names.join('\n'));
}

solve(["John", "Bob", "Christina", "Ema"]);