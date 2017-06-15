/**
 * Created by krustev on 5/24/2017.
 */
function log(nums){
    for (let x of nums) {
        console.log(Math.log2(x));
    }
}

log([1024,1048756,256,1,2])