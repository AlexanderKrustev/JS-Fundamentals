/**
 * Created by krustev on 6/13/2017.
 */
function solve(input){
    let heros=[];
    for(let h of input){
        let args=h.split('/').filter(s=>s!='').map((x)=>x.trim());
        let name=args[0].trim();
        let level=Number(args[1]);
        let tempIt=[];
        if(args[2]!=undefined) {
            tempIt = args[2].split(', ').filter(s => s != "").map((x) => x.trim());

            let hero = {name: name, level: level, items: tempIt}
            heros.push(hero)
        }
        else{
            let hero = {name: name, level: level, items: tempIt}
            heros.push(hero)
        }

    }

    console.log(JSON.stringify(heros))

}

solve([
    'Isacc / 25  ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)