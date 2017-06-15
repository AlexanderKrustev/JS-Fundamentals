/**
 * Created by krustev on 6/7/2017.
 */
function createUsername(arr){
  let resultLast=[];
    for(let input of arr) {
        let str = input.split('@');
        let result = str[0];

        let lastPart = str[1].split('.');
        result += '.';
        for (let x of lastPart) {
            result += x[0];
        }
        resultLast.push(result);
    }

    console.log(resultLast.join(", "))
}

createUsername(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])