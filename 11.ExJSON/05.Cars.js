/**
 * Created by krustev on 6/13/2017.
 */

function catalog(input){
    let cars=new Map();
    for(let row of input){
        let args=row.split('|').filter(s=>s!='').map(x=>x.trim());
        let brand=args[0];
        let model=args[1];
        let qty=Number(args[2]);

        if(cars.has(brand)){
            if(cars.get(brand).has(model)){
                cars.get(brand).set(model, cars.get(brand).get(model)+qty);
            }
            else{
                cars.get(brand).set(model, qty);
            }
        }
        else{
            cars.set(brand, new Map());
            cars.get(brand).set(model,qty)
        }
    }
  //  cars = new Map([...catalog.entries()].sort());
    for(let [k,v] of cars){
        console.log(k);

        for(let [k1,v1] of v){
            console.log(`###${k1} -> ${v1}`);
        }
    }
}

catalog([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])