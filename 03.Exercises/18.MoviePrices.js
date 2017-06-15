/**
 * Created by krustev on 5/26/2017.
 */

function prices(input){
    let movie=input[0].toString().toLowerCase();
    let day = input[1].toString().toLowerCase();

    switch (movie){
        case 'the godfather':
            switch (day){
                case "monday": return 12;
                case "tuesday": return 10;
                case "wednesday": return 15;
                case "thursday": return 12.5;
                case "friday" : return 15;
                case "saturday": return 25;
                case "sunday": return 30;
                default: return "error";
            }; break
        case 'schindler\'s list':
            switch (day){
                case "monday": return 8.5;
                case "tuesday": return 8.5;
                case "wednesday": return 8.5;
                case "thursday": return 8.5;
                case "friday" : return 8.5;
                case "saturday": return 15;
                case "sunday": return 15;
                default: return "error";
            }; break
        case 'casablanca':
            switch (day){
                case "monday": return 8;
                case "tuesday": return 8;
                case "wednesday": return 8;
                case "thursday": return 8;
                case "friday" : return 8;
                case "saturday": return 10;
                case "sunday": return 10;
                default: return "error";
            }; break
        case 'the wizard of oz':
            switch (day){
                case "monday": return 10;
                case "tuesday": return 10;
                case "wednesday": return 10;
                case "thursday": return 10;
                case "friday" : return 10;
                case "saturday": return 15;
                case "sunday": return 15;
                default: return "error";
            }; break
        default: "error"
    }
}

console.log(prices('The Godfather','Monday'))