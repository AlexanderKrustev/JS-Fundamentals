/**
 * Created by krustev on 6/4/2017.
 */

function positiveNegative(input){
    let newArr=[];

    for(let element of input){
        if(element>=0){
            newArr.push(element);
        }
        else{
            newArr.unshift(element);
        }
    }

    for(let element of newArr){
        console.log(element)
    }
}

positiveNegative([7, -2, 8, 9])