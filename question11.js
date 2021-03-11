function sandwichWithCheese(slicesOfBread, slicesOfCheese){
    var pairOfBreads = Math.trunc(slicesOfBread/2);
    if (pairOfBreads >= slicesOfBread){
        return console.log(slicesOfBread);
    }

    if (pairOfBreads < slicesOfBread){
        return console.log(pairOfBreads);
    }
}
sandwichWithCheese(10, 18);