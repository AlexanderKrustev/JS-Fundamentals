/**
 * Created by krustev on 6/13/2017.
 */
function extract(input){
    let wordSet = new Set();
    for(let sen of input) {
        let words = sen.split(/\W+/g).filter(s => s != '');

        for (let w of words) {
            wordSet.add(w.toLowerCase());
        }
    }

    console.log(Array.from(wordSet).join(', '))
}

extract(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'])