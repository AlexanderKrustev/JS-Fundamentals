/**
 * Created by krustev on 6/7/2017.
 */


function agg(input){

    let towns=[];
    let sum=0;

    for(let x=0; x<input.length; x++){
        let ii=input[x].split('|').filter(y=>y!='');
        towns.push(ii[0].trim());
        sum+=Number(ii[1]);
    }

    console.log(towns.join(", "))
    console.log(sum);

}
agg(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
)