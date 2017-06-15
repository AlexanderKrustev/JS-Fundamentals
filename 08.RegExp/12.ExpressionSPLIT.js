/**
 * Created by krustev on 6/8/2017.
 */

function split(input){
    input=input.split(/[\s(),.;]/gi).filter(s=>s!='');
    for(let ch of input){
        console.log(ch)
    }
}


split('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}')