function pieceOfPie(flavoursArr, startFlavour, endFlavour){
    let start = flavoursArr.indexOf(startFlavour);
    let end = flavoursArr.indexOf(endFlavour) + 1;
    let result = flavoursArr.slice(start, end);
    return result;
}