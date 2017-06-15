/**
 * Created by krustev on 6/4/2017.
 */
function process(input){
    let arr=[];
    for(let x=1;x<=input.length-1;x+=2){
        arr.push(input[x]*2);
    }

    for(let x=arr.length-1;x>=0;x--){
        console.log(arr[x])
    }
}

process([10, 15, 20, 25])