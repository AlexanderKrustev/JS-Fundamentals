/**
 * Created by krustev on 5/26/2017.
 */
function distance(input){
    let s1=input[0];
    let s2=input[1];
    let t=input[2]/3.6;
    console.log(Math.abs(s1*t-s2*t));
}

distance([0, 60, 3600])