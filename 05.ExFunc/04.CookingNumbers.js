/**
 * Created by krustev on 5/31/2017.
 */

function numberProcess(input){

    let number=input[0];

    for(let c=1;c<input.length; c++){
        number= proccessCommand(number,input[c]);
        console.log(number);
    }

    function proccessCommand(number,command){
        switch (command){
            case 'chop': return number/2;
            case 'dice': return Math.sqrt(number);
            case 'spice': return number+1;
            case 'bake': return number*3;
            case 'fillet': return number-number*0.2;
        }
    }
}

numberProcess(['32', 'chop', 'chop','chop', 'chop', 'chop'])