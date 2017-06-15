/**
 * Created by krustev on 6/4/2017.
 */


function DNA(input){
    let pattern='ATCGTTAGGG';
    let row=0;
    let countRow=0;
    for(let x=0;x<input;x+=4){

        if(row === 10){
            row=0;
        }

        console.log(`**${pattern[row++]}${pattern[row++]}**`);
        if(row === 10){
            row=0;
        }
        countRow++
        if(countRow>input-1){
            break;
        }
        console.log(`*${pattern[row++]}--${pattern[row++]}*`);
        if(row === 10){
            row=0;
        }
        countRow++
        if(countRow>input-1){
            break;
        }
        console.log(`${pattern[row++]}----${pattern[row++]}`);
        if(row === 10){
            row=0;
        }
        countRow++
        if(countRow>input-1){
            break;
        }
        console.log(`*${pattern[row++]}--${pattern[row++]}*`);
        if(row === 10){
            row=0;
        }
        countRow++
        if(countRow>input-1){
            break;
        }


    }

}

DNA(10)