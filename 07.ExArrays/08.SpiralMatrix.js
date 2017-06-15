/**
 * Created by krustev on 6/4/2017.
 */

function spiral(rows,cols){
    let target=rows*cols;
    let matrix=init(rows,cols)
    let filler=1;
    let k=0;
    let l=0;
    let m=rows;
    let n=cols;
    /*  k - starting row index
     m - ending row index
     l - starting column index
     n - ending column index
     i - iterator
     */
    while (k < m && l < n)
    {
        /* Print the first row from the remaining rows */
        for (let i = l; i < n; ++i)
        {

            matrix[k][i]=filler++
        }
        k++;

        /* Print the last column from the remaining columns */
        for (let i = k; i < m; ++i)
        {

           matrix[i][n-1]=filler++
        }
        n--;

        /* Print the last row from the remaining rows */
        if ( k < m)
        {
            for (let i = n-1; i >= l; --i)
            {

                matrix[m-1][i]=filler++
            }
            m--;
        }

        /* Print the first column from the remaining columns */
        if (l < n)
        {
            for (let i = m-1; i >= k; --i)
            {
                matrix[i][l]=filler++
            }
            l++;
        }
    }
    function init(x,y){
        let matrix=[];

        for(let row=0;row<x;row++){
            matrix[row]=[];
            for(let col=0;col<y;col++){
                matrix[row][col]=0;
            }
        }
        return matrix;
    }




   console.log(
       matrix.map(row => row.join(' '))
           .join('\n'));

}

spiral(5,5);