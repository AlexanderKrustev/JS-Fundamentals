/**
 * Created by krustev on 6/4/2017.
 */

function sortArray(input){


    input.sort(alphabetical);
    input.sort(length);

        function length(a, b){
        if(a.length < b.length) return -1;
        if(a.length > b.length) return 1;
        return 0;
    }

    function alphabetical(a, b){
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    }

    for(let s of input){
        console.log(s)
    }
}

sortArray([`alpha`,`beta`,`gamma`]);

