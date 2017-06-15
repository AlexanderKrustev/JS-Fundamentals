/**
 * Created by krustev on 6/12/2017.
 */
function JsontoHTML(input){
    let arr=JSON.parse(input);
    let result=`<table>\n`
    let propertyName=Object.keys(arr[0]);
    result += ` <tr>`
    for(let prop of propertyName) {
        result += `<th>${prop}</th>`
    }
    result+=`</tr>\n`

    for(let a of arr){
        result+=` <tr>`
       let keys=Object.keys(a);
       for(let k of keys) {

           let name = replaceSecurity(a[k]);
           result += `<td>${name}</td>`

       }
        result+=`</tr>\n`
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

console.log(JsontoHTML('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'))