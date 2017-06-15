/**
 * Created by krustev on 6/7/2017.
 */

function solve(input){
    let allStrings = input.join('');
    let chars = Array.from(allStrings);
    let revChars = chars.reverse();
    let revStr = revChars.join('');
    return revStr;


}