/**
 * Created by krustev on 5/24/2017.
 */


function LeapYearCheck(year){
    if(year%4==0 && year%100!=0 || year%400==0){
        return 'yes';
    }

    return 'no'
}

console.log(LeapYearCheck(2000));