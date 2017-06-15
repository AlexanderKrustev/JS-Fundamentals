/**
 * Created by krustev on 6/13/2017.
 */
function solve(input){
    let liters=new Map();
    let bottles=new Map();
    for(let rows of input){
        let args=rows.split('=>').filter(s=>s!='').map(x=>x.trim());
        let name=args[0];
        let qty=Number(args[1]);
        if(liters.has(name)){
            liters.set(name, liters.get(name)+qty);
           // if(liters.get(name)>=1000 && !bottles.has(name)){
           //     bottles.set(name,0)
           // }
            while(liters.get(name)>=1000){
                if(liters.get(name)>=1000 && !bottles.has(name)){
                    bottles.set(name,0)
                }
                bottles.set(name,bottles.get(name)+1)
                liters.set(name, liters.get(name)-1000);
            }
        }
        else{
            liters.set(name, qty)
            if(qty>=1000){
                bottles.set(name,0)
            }
            while(liters.get(name)>=1000){
                bottles.set(name, bottles.get(name)+1)
                liters.set(name, liters.get(name)-1000);
            }
        }
    }

    for(let [k,v] of bottles){
        console.log(`${k} => ${v}`)
    }
}

solve([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
])