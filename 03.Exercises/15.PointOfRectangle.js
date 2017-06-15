/**
 * Created by krustev on 5/26/2017.
 */
function point(input){
    let x = input[0];
    let y = input[1];
    let xMin = input[2];
    let xMax = input[3];
    let yMin = input[4];
    let yMax = input[5];

    if(x>=xMin && x<=xMax && y>=yMin && y<=yMax){
        return 'inside'
    }
    return 'outside'
}

console.log()