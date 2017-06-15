/**
 * Created by krustev on 6/12/2017.
 */
function toHTML(input){
    let arr=JSON.parse(input);
    let result=`<table>\n`
    result+=` <tr><th>name</th><th>score</th></tr>\n`
    for(let a of arr){
        let name=replaceSecurity(a.name);
        let score=replaceSecurity(a.score)
        result+=`  <tr><td>${name}</td><td>${score}</td></tr>\n`
    }
    result+=`</table>`
    return result;

    function replaceSecurity(str){
        str=String(str).replace(/&/g,"&amp;");
        str=String(str).replace(/</g,"&lt;");
        str=String(str).replace(/>/g,"&gt;");
        str=String(str).replace(/'/g,"&#39;")
        str=String(str).replace(/"/g,"&quot;");

        return str;
    }
}
