/**
 * Created by krustev on 5/26/2017.
 */

function round(input){
    let number=input[0];
    let precision= (input[1]>15)? 15 : input[1];

    return parseFloat(number.toFixed(precision));
}

console.log(round([3.1, 2]))