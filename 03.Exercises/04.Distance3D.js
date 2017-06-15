/**
 * Created by krustev on 5/26/2017.
 */
function Distance3d(input){
    let x1=input[0];
    let y1=input[1];
    let z1=input[2];

    let x2=input[3];
    let y2=input[4];
    let z2=input[5];
    let result = (x1-x2)**2+(y1-y2)**2+(z1-z2)**2;
    return Math.sqrt(result)
}

console.log(Distance3d([1, 1, 0, 5, 4, 0]))