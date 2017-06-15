/**
 * Created by krustev on 5/30/2017.
 */
function aggregate(input){

    function sum(input) {
        let sum=0;
        for(let n of input){
            sum+=n;
        }
        console.log(sum);
    }

    function rsum(input) {
        let sum=0;
        for(let n of input){
            sum+=1/n;
        }
        console.log(sum);
    }

    function concate(input) {
        let result='';
        for(let n of input){
            result+=n;
        }
        console.log(result);
    }

    sum(input);
    rsum(input);
    concate(input);

}

aggregate([1, 2, 3])