/**
 * Created by krustev on 6/12/2017.
 */
function countWord(input){
    let words={};
    for(let i of input) {
        let i1 = i.split(/\W+/g).filter(s => s != "");
        for (let w of i1) {
            if (words[w] == undefined) {
                words[w] = 1;
            }
            else {
                words[w] += 1;
            }
        }
        console.log(JSON.stringify(words))
    }


}
countWord(['Far too slow, you\'re far too slow.'])