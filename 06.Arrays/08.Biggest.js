/**
 * Created by krustev on 6/4/2017.
 */

function biggestElement(matrix) {

    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        r => r.forEach(
            c => biggestNum = Math.max(biggestNum, c)));
    return biggestNum;
}
