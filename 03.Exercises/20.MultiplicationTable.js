/**
 * Created by krustev on 5/26/2017.
 */

function table(input){
    html=`<table border="1">\n`

    for(let row=0;row<=input;row++) {
        html += `<tr>`
        for (let cell = 0; cell <= input; cell++) {
            if(row==0 && cell==0){
                html += `<th>` + 'x' + `</th>`
            }
            else if(row==0 && cell!=0){
            html += `<th>` + cell + `</th>`
            }
            else if(row!=0 && cell==0){
                html += `<th>` + row + `</th>`
            }
            else{
                html += `<td>` + row*cell + `</td>`
            }

        }
        html += `</tr>\n`

    }
    html+=`</table>`
    return html
}


