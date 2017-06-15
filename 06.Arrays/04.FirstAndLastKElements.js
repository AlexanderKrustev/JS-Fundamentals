/**
 * Created by krustev on 6/4/2017.
 */

function printElements(input){
    let k=input[0];
    let result='';
    for(let x=1;x<=k;x++){
        result += input[x]+' ';
    }
    result += '\n';
    let count = input.length - k;
    for(let x=count;x<input.length;x++){
        result += input[x]+' ';
    }

    return result;
}

console.log(printElements([2,7, 8, 9]))