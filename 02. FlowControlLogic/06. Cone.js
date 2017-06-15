/**
 * Created by krustev on 5/24/2017.
 */

function Cone(r,h) {
    let volume=(1/3)*Math.PI*r*r*h;
    let area=Math.PI*r*(r+Math.sqrt(r**2+h**2));
    console.log('volume = '+volume);
    console.log('area = '+area);
}

Cone(3,5);