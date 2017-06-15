/**
 * Created by krustev on 5/30/2017.
 */

function toUpper(input){
    input=input.toUpperCase();
    let splited=input.split(/\W+/)

    splited = splited.filter(x=>x!="")

     console.log(splited.join(', '));
}

toUpper('i, amqq, !b')