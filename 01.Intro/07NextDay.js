/**
 * Created by krustev on 5/23/2017.
 */
function NextDay(year, month, day) {
    let date=new Date(year, month-1, day);
    let nextDay=new Date(date);
    nextDay.setDate(date.getDate()+1);
    console.log(nextDay.getFullYear()+'-'+(nextDay.getMonth()+1)+'-'+nextDay.getDate());
}

NextDay(2016,9,30)