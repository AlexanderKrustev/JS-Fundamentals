/**
 * Created by krustev on 6/7/2017.
 */
function createBill(input) {

    let products = [];
    let sum = 0;

    for (let x = 0; x < input.length; x++) {
        if (x % 2 == 0) {
            products.push(input[x])
        }
        else {
            sum += Number(input[x]);
        }
    }
    console.log(`You purchased ${products.join(", ")} for a total sum of ${sum}`)
}

createBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])