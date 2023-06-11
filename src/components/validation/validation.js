export default function Validation(values){
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.name === ''){
        errors.name = 'Name is required!';
    }

    if(values.email === ''){
        errors.email = 'email is required!';
    }
    else if(!email_pattern.test(values.email)){
        errors.email = 'Email did not matche!';
    } 



    if(values.password === ''){
        errors.password = 'Password required!';
    } else if(!password_pattern.test(values.password)){
        errors.password = 'Password did not matche!';
    } 

    return errors;
}