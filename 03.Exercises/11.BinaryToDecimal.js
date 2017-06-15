/**
 * Created by krustev on 5/26/2017.
 */

function binaryToDecimal(input){
    let result=0;
    let count=0;
    for(let x=input.length-1;x>=0;x--){

        result+=input[x]*Math.pow(2,count);
        count++
    }
    console.log(result);
}


binaryToDecimal('11110000')