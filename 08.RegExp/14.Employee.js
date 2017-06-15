/**
 * Created by krustev on 6/8/2017.
 */

function solve(input){

    let pattern=/^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/

    for(let r of input){


            let matches = pattern.exec(r)
        if(matches){
            console.log(`Name: ${matches[1]}\nPosition: ${matches[3]}\nSalary: ${matches[2]}`)
        }
    }
}

solve(['Jonathan - 2000 - Manager', 'Peter- 1000- Chuck', 'George - 1000 - Team Leader'])