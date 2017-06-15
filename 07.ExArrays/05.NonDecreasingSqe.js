/**
 * Created by krustev on 6/4/2017.
 */

function nonDecSeq(input) {
    let result = [];
    result[0] = input[0];
    for (let element = 1; element < input.length; element++) {

        if (input[element] >= Number(result[result.length - 1])) {

            result.push(input[element])
        }

    }

    for (let c of result) {
        console.log(c)

    }


}

nonDecSeq(['1','3','8','4','10','12','3','2','24']);