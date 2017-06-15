/**
 * Created by krustev on 6/5/2017.
 */

function orbit(input){

    let width=input[0];
    let height=input[1];
    let x=input[2];
    let y=input[3];
    let ofset=1;
    let count=3
    let matrix=init(width,height);
    matrix[x][y]=1;
    let current=2;
    while(count){//!constainZero(matrix)){

                matrix=update(matrix,x,y,current,ofset)
                current++
                ofset++

                 count--


    }

    function constainZero(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (matrix[row][col] != 0) {
                    return false
                }
            }
        }
        return true;
    }



    function update(matrix,row,col,value,ofset){

        if(row-ofset>=0 && matrix[row-ofset][col]==0){
            matrix[row-ofset][col]=value;
           //gore
        }
        if(row+ofset<matrix.length && matrix[row+ofset][col]==0){
            matrix[row+ofset][col]=value;
            //dolu
        }
        if(col-ofset>=0 &&  matrix[row][col-ofset]==0){
            matrix[row][col-ofset]=value;
            //lqvo
        }
        if(col+ofset<matrix[row].length && matrix[row][col+ofset]==0){ //dqsno
            matrix[row][col+ofset]=value;

        }

        if(row-ofset>=0 && col-ofset>=0 && matrix[row-ofset][col-ofset]==0){
            matrix[row-ofset][col-ofset]=value;
            //goren lqv
        }
        if(row-ofset>=0 && col+ofset<matrix[row-ofset].length &&  matrix[row-ofset][col+ofset]==0){ //goren desen
            matrix[row-ofset][col+ofset]=value;

        }

        if(row+ofset<matrix.length && col-ofset>=0 &&  matrix[row+ofset][col-ofset]==0){
            matrix[row+ofset][col-ofset]=value;
            //dolen lqv
        }
        if(row+ofset<matrix.length && col+ofset<matrix[row+ofset].length &&  matrix[row+ofset][col+ofset]==0){ //dolen desen
            matrix[row+ofset][col+ofset]=value;

        }

        if(col+ofset<matrix[row].length) {
            for (let x = col+ofset; x > col; x--) {
                if(row + ofset<matrix.length) {
                    matrix[row + ofset][x] = value;
                }
                if(row - ofset>=0) {
                    matrix[row - ofset][x] = value;
                }
            }
        }

        if(col-ofset>=0) {
            for (let x = col-ofset; x < col; x++) {
                if(row + ofset<matrix.length) {
                    matrix[row + ofset][x] = value;
                }
                if(row - ofset>=0) {
                    matrix[row - ofset][x] = value;
                }
            }
        }


        if(row+ofset<matrix.length) {
            for (let x = row+ofset; x > row; x--) {
                if(col+ofset<matrix[row].length) {
                    matrix[x][col + ofset] = value;
                }
                if(col-ofset>=0)
                {
                    matrix[x][col - ofset] = value;
                }
            }
        }

        if(row-ofset>=0) {
            for (let x = row-ofset; x < row ; x++) {
                if(col-ofset>=0)
                {
                    matrix[x][col - ofset] = value;
                }
                if(col+ofset<matrix[row].length) {
                    matrix[x][col + ofset] = value;
                }
            }
        }



        return matrix;



    }




    function init(rows,cols){
        let matrix=[];

        for(let row=0;row<rows;row++){
            matrix[row]=[];
            for(let col=0;col<cols;col++){
                matrix[row][col]=0;
            }


        }
        return matrix;
    }

    console.log(
        matrix.map(row => row.join(' '))
            .join('\n'));
}

orbit([3, 3, 2, 2])