/**
 * Created by krustev on 5/26/2017.
 */

function GontoDegree(input){
    let result= (input*0.9)%360;
    if(result<0){
        result= 360+result;
    }

    return result;

}


console.log(GontoDegree(420))

let degrees = ((grads * 360) / 400) % 360;
degrees = degrees < 0 ? degrees + 360 : degrees;