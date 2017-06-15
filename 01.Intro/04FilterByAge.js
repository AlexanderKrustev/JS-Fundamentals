/**
 * Created by krustev on 5/23/2017.
 */

function FilterByAge(minimumAge,name1,age1,name2,age2) {
    let person1 = {name:name1, age:age1 };

    let person2 = {name:name2, age:age2 };

    if(person1.age>=minimumAge){
        console.log(person1);
    }

    if(person2.age>=minimumAge){
        console.log(person2);
    }
}

FilterByAge (12, 'Ivan', 15, 'Asen', 9)