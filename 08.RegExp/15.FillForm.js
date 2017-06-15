/**
 * Created by krustev on 6/8/2017.
 */

function fillForm(user, mail, phone, input){

    for(let x=0; x<input.length; x++) {
        input[x] = input[x].replace(/<![A-Za-z]+!>/, user);
        input[x] = input[x].replace(/<@[A-Za-z]+@>/, mail);
        input[x] = input[x].replace(/<\+([A-Za-z]+)\+>/, phone);
        console.log(input[x])
    }
}

fillForm('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!_D!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
)