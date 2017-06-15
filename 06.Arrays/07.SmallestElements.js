/**
 * Created by krustev on 6/4/2017.
 */

function smallest(input){
    input.sort((a,b)=>a-b);

    console.log(input[0]);
    console.log(input[1]);
}

smallest([30, 15, 50, 5])