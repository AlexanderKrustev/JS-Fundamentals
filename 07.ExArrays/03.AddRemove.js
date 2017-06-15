/**
 * Created by krustev on 6/4/2017.
 */

function addRemove(input){
    let arr=[];
    let start=0;
    for(let c of input){
        start++;
        if(c=='add'){
          arr.push(start);
        }
        else{
            arr.pop()
        }

    }

    if(arr.length==0){
        console.log('Empty');

    }
    else {
        for (let c of arr) {
            console.log(c)

        }
    }
}



