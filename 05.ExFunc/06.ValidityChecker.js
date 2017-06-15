/**
 * Created by krustev on 5/31/2017.
 */

function checker(input){
    let x1 = input[0];
    let x2 = input[2];
    let y1 = input[1];
    let y2 = input[3];

    function distanceCheck(x1,y1,x2,y2){
        let exact=Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
        let rounded = Math.floor(Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)));
        if(exact==rounded){
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }
        else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        }
    }

    distanceCheck(x1,y1,0,0);
    distanceCheck(x2,y2,0,0);
    distanceCheck(x1,y1,x2,y2);
}

checker([2, 1, 1, 1])