/**
 * Created by krustev on 6/12/2017.
 */
function populationInTown(input) {
    let map=new Map();
    for(let str of input){
        let attr=str.split('<->');
        let town=attr[0];
        let population=Number(attr[1]);
        if(map.has(town)){
            map.set(town,map.get(town)+population)
        }
        else{
            map.set(town,population)
        }
    }

    for(let [k,v] of map){
        console.log(`${k}: ${v}`)
    }
}

populationInTown(['Sofia <-> 1200000','Montana <-> 20000','New York <-> 10000000','Washington <-> 2345000','Las Vegas <-> 1000000'])