export const validate = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = "Name required";
    } else if (values.username.length < 3 || values.username.length > 20) {
        errors.username = "Name length should be from 3 to 20 characters";
    }
    if (!values.email) {
        errors.email = "Email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email";
    }
    if (!values.password) {
        errors.password = "Password required";
    } else if (values.password.length < 8 || values.password.length > 15) {
        errors.password = "Password length should be from 8 to 15 characters";
    }
    if (values.password2 !== values.password) {
        errors.password2 = "Password mismatch";
    }
    return errors;
};