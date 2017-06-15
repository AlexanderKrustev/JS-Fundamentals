/**
 * Created by krustev on 6/13/2017.
 */
function JsontoHTML(input){
    let arr=[];
    for(let row of input) {
        arr.push( JSON.parse(row));
    }

    let result=`<table>\n`


    for(let a of arr){
        result+=`    <tr>\n`
        let keys=Object.keys(a);
        for(let k of keys) {

            let name = replaceSecurity(a[k]);
            result += `        <td>${name}</td>\n`

        }
        result+=`    <tr>\n`
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

console.log(JsontoHTML(['{"name":"Pesho","position":"Promenliva","salary":100000}','{"name":"Teo","position":"Lecturer","salary":1000}','{"name":"Georgi","position":"Lecturer","salary":1000}']))