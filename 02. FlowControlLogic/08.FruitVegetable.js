/**
 * Created by krustev on 5/24/2017.
 */
function FruitVegetable(fruit) {
    switch (fruit) {
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'banana':
        case 'apple':
        case 'peach': return 'fruit';
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley': return 'vegetable';
        default: return 'unknown'

    }
}

console.log(FruitVegetable('g1arlic'));