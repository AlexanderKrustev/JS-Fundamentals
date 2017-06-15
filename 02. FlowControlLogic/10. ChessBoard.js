/**
 * Created by krustev on 5/24/2017.
 */

function board(num) {
    let html=`<div class="chessboard">\n`;
    let color="black";
    for(let row=1;row<=num;row++){
        html+=`<div>\n`;
        if(row%2==0){
            color="white";
        }
        else{
            color="black";
        }
        for(let cell=0;cell<num;cell++){

            html+=`    <span class="${color}"></span>\n`;
            if(color=="black"){
                color='white'
            }
            else{
                color="black";
            }
        }
        html += '</div>\n';
    }
    html+=`</div>\n`;
    return html;
}

console.log(board(4));