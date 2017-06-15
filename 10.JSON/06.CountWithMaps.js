/**
 * Created by krustev on 6/12/2017.
 */
function countWordWithMaps(input){
    let words=new Map();
    for(let i of input) {
        let i1 = i.toLowerCase().split(/\W+/g).filter(s => s != "");
        for (let w of i1) {
            if (!words.has(w)) {
                words.set(w,1);
            }
            else {
                words.set(w,words.get(w)+1);
            }
        }
        let allWords = Array.from(words.keys()).sort();
        for(let k of allWords){
            console.log(`'${k}' -> ${words.get(k)} times`)
        }
    }

}

countWordWithMaps(['Far too slow, you\'re far too slow.'])