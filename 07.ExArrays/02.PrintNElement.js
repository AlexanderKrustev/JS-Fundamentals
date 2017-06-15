/**
 * Created by krustev on 6/4/2017.
 */

function printEveryNElement(input){
    let n=input[input.length-1]

    for(let x=0;x<input.length-1;x++){
        if(x%n==0){
            console.log(input[x])
        }
    }
}

