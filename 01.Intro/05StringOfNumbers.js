/**
 * Created by krustev on 5/23/2017.
 */

function StringOf1toN(input){
    let stringResult='';
    for(let x=1;x<=Number(input);x++){
        stringResult+=x;
    }
    console.log(stringResult);
}

StringOf1toN(11)