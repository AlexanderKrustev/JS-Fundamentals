/**
 * Created by krustev on 6/7/2017.
 */

function solve(input){

    let html=`<ul>\n`;

    for(let row=0;row<input.length;row++) {

        input[row]=input[row].replace(/&/gi, '&amp;');
        input[row]=input[row].replace(/</gi, '&lt;');
        input[row]=input[row].replace(/>/gi, '&gt;');

        input[row]=input[row].replace(/"/gi, '&quot;');

        html +=` <li>${input[row]}</li>\n`
    }

    html+=`</ul>`
    return html;
}

console.log(solve(['<b>unescaped text</b>', 'normal text']))