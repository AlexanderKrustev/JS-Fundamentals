/**
 * Created by krustev on 6/7/2017.
 */

function text(input){
    result =[]
    let f=input.indexOf('(');
    while(f>-1){

        let s = input.indexOf(')',f);

        if(s==-1){
            break;
        }
        else {
            result.push(input.substring(f + 1, s))
             f = input.indexOf('(',s);
        }
    }

    console.log(result.join(', '));
}

text('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')