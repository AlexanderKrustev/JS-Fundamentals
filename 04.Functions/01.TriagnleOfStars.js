/**
 * Created by krustev on 5/30/2017.
 */
function triangle(input){
    for(let row=1;row<=input;row++){
       // for(let col=row;)
        console.log('*'.repeat(row))
    }
    for(let row=input-1; row>0;row--){
        console.log('*'.repeat(row))
    }
}

triangle(5)