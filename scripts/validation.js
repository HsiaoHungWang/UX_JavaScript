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