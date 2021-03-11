function sumAndProductOfArrays(array){

    sum = 0;
    product = 1;
for (i = 0; i < array.length; i ++) 
   {
   sum += array[i];
   product *= array[i];
    }
console.log('Sum : '+sum + ' Product :  ' +product);
}

let array = [1, 2, 3, 4, 5, 6];
sumAndProductOfArrays(array);