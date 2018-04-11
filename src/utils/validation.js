export function validateEmail(email) {
    const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = re.test(String(email).toLowerCase());
    if (!valid) return 'Email is not valid!'
    return null;
}

export function validateRequired({ name, field }) {
    if (!field) return name + ' is required!'
    return null;
}

export function validateEquals({ name, field, equalToName, equalTo }) {
    if (field !== equalTo) return name + ' is not equal to ' + equalToName + '!';
    return null;
}