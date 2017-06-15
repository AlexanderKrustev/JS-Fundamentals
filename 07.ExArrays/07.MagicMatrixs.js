/**
 * Created by krustev on 6/4/2017.
 */
function magicMatrix(matrix){
    let resultSum = sum(matrix[0]);
    let check=true;
    for(let row=1;row<matrix.length;row++){
        if(resultSum!=sum(matrix[row])){
            check=false;
            break;
        }
    }

    for(let col=0;col<matrix[0].length;col++){
        let tempSum=0;
        for(let row=0;row<matrix.length;row++){
            tempSum+=matrix[row][col];
        }
        if(resultSum!=tempSum){
            check=false;
            break;
        }

    }

    function sum(input){
        let sum=0;
       for(let x of input){
           sum+=x;
       }
       return sum;
    }

    console.log(check)
}


magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
)