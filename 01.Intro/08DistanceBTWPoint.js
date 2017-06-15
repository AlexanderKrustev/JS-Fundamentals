/**
 * Created by krustev on 5/23/2017.
 */
function CalculateDistance(x1,y1,x2,y2){
    let distance=Math.sqrt(Math.pow(Math.abs(x1-x2),2)+Math.pow(Math.abs(y1-y2),2));
    console.log(distance)
}


CalculateDistance(2.34, 15.66, -13.55, -2.9985);