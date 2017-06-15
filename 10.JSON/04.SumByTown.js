/**
 * Created by krustev on 6/12/2017.
 */
function sumByTown(input){
    let towns={};
    for(let x=0;x<input.length;x+=1){
        if(x%2==0){
            if(towns[input[x]]==undefined){
                towns[input[x]]=Number(0);
            }

        }
        else{
            towns[input[x-1]]+=Number(input[x])
        }
    }

    return JSON.stringify(towns)
}

console.log(sumByTown(['Sofia','20','Varna','3','Sofia','5','Varna','4']))