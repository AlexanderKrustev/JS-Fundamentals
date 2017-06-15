/**
 * Created by krustev on 6/4/2017.
 */
function diagonalSum(matrix){

    let rightDiagonal=0;
    let leftDiagonal=0;

    for(let row=0;row<matrix.length;row++){
        rightDiagonal +=matrix[row][row]
        leftDiagonal +=matrix[row][matrix.length-1-row]
    }
    console.log(rightDiagonal+' '+ leftDiagonal);

}

diagonalSum([[20, 40],[10, 60]])