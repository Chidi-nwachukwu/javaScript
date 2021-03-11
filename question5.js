function addWithSubCharge(num1, num2){
    if (num1 <= 10){
        num1 = num1 + 1;
    }
    else {
        num1 = num1 + 2;
    }
    if (num2 <= 10){
        num2 = num2 + 1
    }
    else{
        num2 = num2 + 2
    }
    return num1 + num2;
}

console.log(addWithSubCharge(10, 3));