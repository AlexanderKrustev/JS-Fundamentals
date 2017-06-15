/**
 * Created by krustev on 5/26/2017.
 */

function footToInch(foot){


    let man=Math.floor(foot/12);
    let exp=foot%12;

    return man+'\'-'+exp+'"';
}


console.log(footToInch(55))