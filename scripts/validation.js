const checkMail = mail => {
    let isValid = true;
    //檢查
    if (!mail.includes('@')) {
        isValid = false;
    } else if (mail.indexOf('@') === 0 || mail.indexOf('@') === mail.length - 1) {
        isValid = false;
    }

    return isValid;
}