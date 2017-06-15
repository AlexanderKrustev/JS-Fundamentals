/**
 * Created by krustev on 5/31/2017.
 */

function avarage(input){

    function getAvarage(input) {
        let av=0;
        let count=0;
       while(input>0){
            count++;
            av += input%10;
            input=Math.floor(input/10);
        }

        return av/count;
    }

    let av1= getAvarage(input);
     while(av1<=5) {
         input+='9';
         av1=getAvarage(input)
     }
     return input;
}

console.log(avarage(5835))