/**
 * Created by krustev on 6/12/2017.
 */
function lowestPrice(input){
    let productMaps = new Map();
    for(let str of input){
        let attr=str.split('|');
        let town=attr[0];
        let product=attr[1];
        let money=Number(attr[2])
        if(productMaps.has(product)){

            let arg=productMaps.get(product).split('+');
            if(arg[0]==town.trim()){
                productMaps.set(product, town.trim()+'+'+money)
            }
            else {
                if (Number(arg[1]) > money)
                    productMaps.set(product, town.trim() + '+' + money)
            }
        }
        else{

            productMaps.set(product, town.trim()+'+'+money)
        }
    }

    for(let [k,v] of productMaps){
        let arg=productMaps.get(k).split('+');
        console.log(`${k}-> ${arg[1]} (${arg[0]})`)
    }
}
//lowestPrice(['Sofia City | Audi | 100000', 'Sofia City | BMW | 100000','Sofia City | Mitsubishi | 10000','Sofia City | Mercedes | 10000',
//    'Sofia City | NoOffenseToCarLovers | 0','Mexico City | Audi | 1000',
//'Mexico City | BMW | 99999',
//'New York City | Mitsubishi | 10000',
//'New York City | Mitsubishi | 1000',
//'Mexico City | Audi | 100000',
//'Washington City | Mercedes | 1000'])

lowestPrice([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'])
//lowestPrice(['Sample Town | Sample Product | 1000','Sample Town | Orange | 2','Sample Town | Peach | 1','Sofia | Orange | 3','Sofia | Peach | 2','New York | Sample Product | 1000.1','New York | Burger | 10'])