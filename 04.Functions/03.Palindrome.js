/**
 * Created by krustev on 5/30/2017.
 */
function isPalindome(input){
    let result='';
    for(let x=input.length-1;x>=0;x--){
        result+=input[x];
    }
    if(input==result){
        return true;
    }
    return false;
}

console.log(isPalindome('haha'))