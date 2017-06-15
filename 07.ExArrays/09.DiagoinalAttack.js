/**
 * Created by krustev on 6/5/2017.
 */

function diagonals(input){

    let matrix=init(input.length,input)

    let diagonalR=sumMain(matrix);
    let diagonal = sumSecond(matrix);

    if(diagonal==diagonalR){
        for(let row=0;row<matrix.length;row++){
            for(let col=0;col<matrix[row].length;col++){
                if(col!=row && col!=(matrix.length-1-row)){
                    matrix[row][col]=diagonalR
                }
            }
        }
    }




    function init(rows,input){
        let matrix=[];

        for(let row=0;row<rows;row++){
            matrix[row]=[];

                matrix[row]=input[row].split(' ');

        }
        return matrix;
    }

    function sumMain(matrix){
        let sum=0;
        for(let row=0;row<matrix.length;row++){
            for(let col=0;col<matrix[row].length;col++){
                if(col==row){

                    sum +=Number(matrix[row][col]);
                }
            }
        }

        return sum;
    }

    function sumSecond(matrix){
        let sum=0;
        for(let row=matrix.length-1;row>=0;row--){
            for(let col=0;col<matrix[row].length;col++){
                if(col==row){
                    sum +=Number(matrix[row][col]);
                }
            }
        }

        return sum;
    }

    console.log(
        matrix.map(row => row.join(' '))
            .join('\n'));
}

diagonals(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)