/**
 * Created by krustev on 5/30/2017.
 */

function speed(input){
    let area=input[1];
    let speed=input[0];
    let allowedSpeed = speedLimit(area);

        function speedLimit(input) {
            switch (input){
                case 'motorway': return 130;
                case 'interstate': return 90;
                case 'city': return 50;
                case 'residential': return 20;
            }
        }
    let intrusion = speed-allowedSpeed;

        if(intrusion>0 && intrusion<=20){
            console.log("speeding")
        }
        else if(intrusion>20 && intrusion<=40){
            console.log("excessive speeding")
        }
        else if(intrusion>40){
            console.log("reckless driving")
        }


}

speed([40, 'city'])

