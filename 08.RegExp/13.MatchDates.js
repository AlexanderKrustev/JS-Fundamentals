/**
 * Created by krustev on 6/8/2017.
 */

function matchDates(input){
    let pattern=/\b([\d]{1,2}-[A-Z]*[a-z]{2}-[0-9]{4})\b/g

    let matches=String(input).match(pattern);

    for(let date of matches){
        let pieces=date.split('-');
        console.log(`${date} (Day: ${pieces[0]}, Month: ${pieces[1]}, Year: ${pieces[2]})`)
    }
}

matchDates("I dont know what to test anymore so here are some random dates. 15-May-1996 21-June-1995 31-February-3000 woops that was invalid... 111-Nov-2332 01-January-0001 " +
    "What the fuck" +
    "11-Sep-2001" +
    "One minute of silence!")