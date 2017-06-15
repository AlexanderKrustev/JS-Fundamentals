/**
 * Created by krustev on 6/7/2017.
 */

function solve(input){
    let result=input.split(/\W+/).filter(s=>s!="");

    console.log(result.join('|'))
}

solve('Some random words and letters and other things. In a sentence, also there are some signs like + or ? Sentences can also have semicolons; or dots. and !')