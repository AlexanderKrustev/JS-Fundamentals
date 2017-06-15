/**
 * Created by krustev on 6/4/2017.
 */


function pricntEvenPOsition(input){
    let result='';
    for(let x=0;x<input.length;x++){
        if(x%2==0){

            result += (input[x]+' ')
        }
    }

    return result;
}

pricntEvenPOsition(['20', '30', '40'])