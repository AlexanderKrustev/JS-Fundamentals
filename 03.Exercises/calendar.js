/**
 * Created by krustev on 5/29/2017.
 */
function calendar(input) {
    html = `<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n`;
    let currentDate=new Date(input[2],input[1]-1,1)
    let lastDay=new Date(input[2],input[1]-1,0).getDate();
    let previusDate=new Date(currentDate.getFullYear(), currentDate.getMonth()-1,0);
    let previousDays= currentDate.getDay();
    previusDate.setDate(previusDate.getDate()-previousDays+1);
    let day= previusDate.getDate();
    for(let col=0; col<previousDays ;col++){

        html += `<tr><td class="prev-month">`+ day++ +`</td>`;
    }
    day=1;
    for(let col=previousDays; col<lastDay+previousDays+1 ;col++){
        if(day+1==input[0]){
            html += `<tr><td ="today">>`+ day++ +`</td>`;
        }
        else {
            html += `<tr><td >` + day++ + `</td>`;
        }
        if(col%7==0){
            html +='\n';
        }

    }

    let nextdate=new Date(currentDate.getFullYear(), currentDate.getMonth()+1,1);
    console.log(nextdate.toDateString())
    let nextDay=7-nextdate.getDay();
    day=1;
    for(let col=0; col<nextDay ;col++){

        html += `<tr><td class=="next-month">>`+ day++ +`</td>`;
    }
    console.log(nextDay)
    return html;
}

console.log(calendar([24,12, 2012]))