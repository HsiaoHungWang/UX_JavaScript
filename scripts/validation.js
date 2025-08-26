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

const checkImageFile = fileName => {
    const imgExtensions = ['jpg', 'png', 'webp'];
    //split() 把字串轉成陣列
    //trim() 把字串的前後空白去掉
    //toLowerCase() 把字串轉成小寫
    const extensions = fileName.split('.')[1].trim().toLowerCase();

    return imgExtensions.includes(extensions);

}

const calcAge = strDate => {
    const today = new Date();
    const birthDate = new Date(strDate);

    let age = today.getFullYear() - birthDate.getFullYear();


    let isPassed = false;

    if (today.getMonth() > birthDate.getMonth()) {
        isPassed = true;
    } else if (today.getMonth() < birthDate.getMonth()) {
        isPassed = false;
    } else {
        isPassed = today.getDate() > birthDate.getDate();
    }



    if (!isPassed) {
        age -= 1;
    }
    return age;
}

const checkPersonId = id => {
    const re = /^[a-zA-Z]{1}[1-2]{1}\d{8}$/;
    return re.test(id);
}

const checkPhone = phone => {
    //0911-222-333
    const re = /^09\d{2}-\d{3}-\d{3}$/;
    return re.test(phone);

}

const checkMailByRegexp = mail => {
    const re = /^.+@.+\..{2,3}$/;
    return re.test(mail);
}

const checkPassword = pwd => {
    //6 位數以上，並且至少包含 大寫字母、小寫字母、數字、符號 各一
    const re = /^(?=.*[^a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
    return re.test(pwd);
}

// export default checkEmpty = data => {
//     if (data.length === 0) {
//         return false;
//     } else {
//         return true;
//     }
// }

export { checkImageFile, calcAge, checkPersonId, checkPhone, checkMailByRegexp, checkPassword }