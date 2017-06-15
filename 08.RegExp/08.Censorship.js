/**
 * Created by krustev on 6/7/2017.
 */

function censoring(str, input)
{

    for(let censor of input) {

        while (str.indexOf(censor) > -1)
        {

           str = str.replace(censor, '-'.repeat(censor.length))
        }

    }
    console.log(str);
}


censoring('roses are red, violets are blue', [', violets are', 'red'])