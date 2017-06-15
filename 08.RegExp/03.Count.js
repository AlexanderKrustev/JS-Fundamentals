/**
 * Created by krustev on 6/7/2017.
 */

function count(input0,input1){
    let pattern = input0;
    let str=input1;
    let count=0;
    for(let x=0;x<=str.length-pattern.length; x+=1){
        let cc=str.substr(x,pattern.length);
        if(cc==pattern){
            count++
        }
    }

    return count;
}

console.log(count('the', 'The quick brown fox jumps over  lay dog. the'));