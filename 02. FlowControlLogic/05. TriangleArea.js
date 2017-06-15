/**
 * Created by krustev on 5/24/2017.
 */
function Area(a,b,c) {
    let s=(a+b+c)/2;
    let area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;
}

console.log(Area(2,3.5,4))