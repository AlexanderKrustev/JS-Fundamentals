/**
 * Created by krustev on 5/31/2017.
 */
function toXML(input){


    let result='<?xml version="1.0" encoding="UTF-8"?>\n';
    result+='<quiz>\n';

    let pos=0;
    for(let q=0;q<input.length;q+=2) {
        let question=input[pos++];
        let answer=input[pos++];
        result+=' <question>\n';
        result += '  ' + question + '\n';
        result += ' </question>\n';
        result += '<answer>\n';
        result += ' ' + answer + '\n';
        result += '</answer>\n';
    }
    result+='</quiz>\n';

    return result;
}

console.log(toXML(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
))