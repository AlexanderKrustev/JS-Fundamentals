/**
 * Created by krustev on 6/4/2017.
 */
function rotate(input){
    let rotate=input[input.length-1];
    input.pop();
    rotate %= input.length

    for(let r=0;r<rotate;r++) {
        input=rot(input);
    }

    function rot(input){
        input.unshift(input.pop());
        return input;
    }

    console.log(input.join(" "))
}

rotate(['1','2','3','4','2'])
