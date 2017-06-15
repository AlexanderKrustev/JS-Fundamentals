/**
 * Created by krustev on 5/26/2017.
 */

function assingProperties(input){
    let obj ={
        [input[0]] : input[1],
        [input[2]] : input[3],
        [input[4]] : input[5]
    }

    return obj;
}

console.log(assingProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']))