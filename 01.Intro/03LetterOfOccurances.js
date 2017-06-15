/**
 * Created by krustev on 5/23/2017.
 */

function LetterCounter(input,letter){
    let count=0;
    for(let x=0;x<input.length;x++){
        if(input[x]==letter){
            count++;
        }
    }

    console.log(count)
}

LetterCounter('hello','l')