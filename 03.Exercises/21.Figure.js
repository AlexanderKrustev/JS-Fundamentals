/**
 * Created by krustev on 5/26/2017.
 */
function draw(input){

    let result=''
    let rows=0;
    if(input%2!=0){
        rows=input;
    }
    else{
        rows=input-1
    }
    for(let row=0;row<rows;row++) {

        if(row==0 || row==Math.floor(rows/2) || row==rows-1) {
            for (let x = 1; x <= input * 2 - 1; x++) {
                if (x == 1 || x == input || x == input * 2 - 1) {
                    result += '+'
                }
                else {
                    result += '-'
                }
            }
            result += '\n'
        }
        else{
           result+='|'+' '.repeat(input-2)+'|'+' '.repeat(input-2)+'|\n'

        }
    }

    console.log(result)
}


draw(5)