/**
 * Created by krustev on 6/4/2017.
 */

function printBYGivenDelimiter(input){
    let delimiter=input[input.length-1];

    input.pop();
    console.log(input.join(delimiter));

}