/**
 * Created by krustev on 5/26/2017.
 */

function interest(input){
    let P=input[0];
    let i =input[1]/100;
    let n = 12/input[2];
    let t = input[3];

    return P*Math.pow((1+i/n),n*t)
}

console.log(interest([1500, 4.3, 3, 6]))