/**
 * Created by krustev on 6/4/2017.
 */

function elements(n,k){
    let arr=[1];
    for(let x=1;x<n;x++){
        arr.push(nextElement(arr,k))
    }
    function nextElement(arr,k) {
        let result=0;
        for(let x = arr.length-k; x<arr.length;x++){
            if(x<0){
                continue;
            }
            else{
                result +=arr[x];
            }

        }

        return result;
    }
    console.log(arr.join(' '));
}

elements(6,3)