/**
 * Created by krustev on 6/12/2017.
 */

function toJSON(input){

    let resuilt=[];
    for(let x=1;x<input.length;x++){
        let properties=input[x].split('|').filter(s=>s!="");
        let town={Town:properties[0].trim(),Latitude:Number(properties[1].trim()),Longitude:Number(properties[2].trim())};

        resuilt.push(town)

    }

    return JSON.stringify(resuilt)
}

console.log(toJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
))