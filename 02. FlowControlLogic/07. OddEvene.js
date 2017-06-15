/**
 * Created by krustev on 5/24/2017.
 */
function OddEvenChecker(num) {
    let result='invalid';
    if(Math.abs(num)%2==0){
        result='even';
    }
    else if(Math.abs(num)%2==1){
        result='odd';
    }

    return result;
}

console.log(OddEvenChecker(2.2))