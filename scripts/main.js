const tempatureConvert = (degree, type) => {
    //type => C、F
    let result;
    if (type === 'C') {
        //華氏(℉)=攝氏 ∗ (9/5)+32
        result = degree * (9 / 5) + 32;
    } else {
        //攝氏(℃)=(華氏−32)∗ (5/9)

        result = (degree - 32) * (5 / 9);
    }

    return result;
}

//BMI = 體重(公斤)/身高(公尺)的平方
const calcBMI = (height, w) => {
    const h = height / 100; //公尺
    //const w = weight; //公斤
    const bmi = w / (h * h); // h ** 2
    // console.log(bmi.toFixed(2));

    let message = '';
    if (bmi < 18.5) {
        message = '過輕';
    } else if (bmi < 24) {
        message = '正常'
    } else if (bmi < 27) {
        message = '過重'
    } else {
        message = '請重新輸入'
    }

    // console.log(message);
    //[]、{key:value, key:value}
    return { "bmi": bmi.toFixed(2), "message": message };
}

