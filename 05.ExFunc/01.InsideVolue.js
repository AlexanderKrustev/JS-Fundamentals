/**
 * Created by krustev on 5/30/2017.
 */
function InsideVolume(input){

    function isInside(x,y,z){
        let x1=10;
        let x2=50;
        let y1=20;
        let y2=80;
        let z1=15;
        let z2=50;

        return (x>=x1 && x<=x2 && y>=y1 && y<=y2 && z>=z1 && z<=z2)
    }
    let counter=0;
    for(let n=0;n<input.length;n+=3){
        if(isInside(input[n],input[n+1],input[n+2])){
             console.log("inside")
        }
        else {
            console.log("outside")
        }
    }
}
InsideVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
)