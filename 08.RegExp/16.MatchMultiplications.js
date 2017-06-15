/**
 * Created by krustev on 6/8/2017.
 */
function multiply(input){
    let pattern=/(-?[\d]{1,2})\s{0,10}\*\s{0,10}(-?[\d].?[\d]{0,2})/g

    let math=pattern.exec(input);

    while(math){
        input=input.replace(math[0], Number(math[1])*Number(math[2]))
        math=pattern.exec(input);
    }

    console.log(input)
}

multiply('My bill is: 4 * 2.50 (beer); 12* 1.50 (kepab); 1  *4.50 (salad); 2  * -0.5 (deposit).')