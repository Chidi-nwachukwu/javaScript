// Math.sqrt
function lenght_of_three_sides(first_side, second_side, third_side){
   
    let side_sum = (first_side + second_side + third_side)/2;
    let area =  Math.sqrt(side_sum*((side_sum-first_side)*(side_sum-second_side)*(side_sum-third_side)));
    area = area.toFixed(2)
    area = Number(area)
    return(area)
}
console.log(lenght_of_three_sides(5, 6, 7));