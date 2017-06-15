/**
 * Created by krustev on 5/26/2017.
 */
function lastMonth(input){
   let date=new Date(input[2],input[1],input[0])

    let newdate=new Date(date.getFullYear(),date.getMonth()-1,0);
    return newdate.getDate();
}


console.log(lastMonth([17, 3, 2002]))