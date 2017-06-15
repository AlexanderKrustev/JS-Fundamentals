/**
 * Created by krustev on 5/23/2017.
 */
function CalcVat(input) {
    let sum=0;
    for(let x=0; x < input.length; x++ )
    {
        sum += Number(input[x]);
    }
    let vat = sum*0.2;
    let total = sum+ vat
    console.log(sum);
    console.log(vat);
    console.log(total)

}

CalcVat([1,2,3,4])