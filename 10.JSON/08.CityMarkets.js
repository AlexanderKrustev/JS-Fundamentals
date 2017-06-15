/**
 * Created by krustev on 6/12/2017.
 */
function cityMarket(input) {
    let townMap = new Map();
    for(let str of input){
        let attr=str.split('->');
        let town=attr[0];
        let product=attr[1];
        let money=attr[2].split(":");
        let totalIncome=Number(money[0])*Number(money[1]);
        if(!townMap.has(town)){
            townMap.set(town, new Map())
        }
        if(townMap.get(town).has(product.trim())){
            townMap.get(town).set(product.trim(),townMap.get(town).get(product)+totalIncome)
        }
        else{
            townMap.get(town).set(product.trim(),totalIncome);
        }
    }

    for(let [k,v] of townMap){
        console.log(`Town - ${k}`)
        for(let [k1,v1] of v){
            console.log(`$$$${k1} : ${v1}`)
        }
    }
}

cityMarket(['Sofia -> Laptops HP -> 200 : 2000','Sofia -> Raspberry -> 200000 : 1500','Sofia -> Audi Q7 -> 200 : 100000','Montana -> Portokals -> 200000 : 1','Montana -> Qgodas -> 20000 : 0.2','Montana -> Chereshas -> 1000 : 0.3'])