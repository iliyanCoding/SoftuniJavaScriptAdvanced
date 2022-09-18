function biggerHalf(arr){
    arr.sort((a, b) => a - b);
    

    return arr.slice(arr.lemgth / 2);

}

biggerHalf([3, 19, 14, 7, 2, 19, 6]);