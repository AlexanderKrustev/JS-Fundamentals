/**
 * Created by krustev on 6/8/2017.
 */
function validateEmail(email) {
    let pattern =
        /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/g;
    let result = pattern.test(email);
    if (result) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}

validateEmail(['bai.ivan@mail.sf.net'])

