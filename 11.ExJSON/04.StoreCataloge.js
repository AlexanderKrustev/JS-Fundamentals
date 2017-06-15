/**
 * Created by krustev on 6/13/2017.
 */
function catalog(input){
    let catalog=new Map();
    for(let row of input){
        let args=row.split(':').filter(s=>s!='').map(x=>x.trim());
        let name=args[0];
        let price=Number(args[1]);
        let firstChar=name[0];

        if(catalog.has(firstChar)){
            catalog.get(firstChar).set(name,price)
        }
        else{
            catalog.set(firstChar, new Map());
            catalog.get(firstChar).set(name,price)
        }
    }
    catalog = new Map([...catalog.entries()].sort());
    for(let [k,v] of catalog){
        console.log(k);
        var mapAsc = new Map([...v.entries()].sort());
        for(let [k1,v1] of mapAsc){
            console.log(` ${k1}: ${v1}`);
        }
    }
}

catalog([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])