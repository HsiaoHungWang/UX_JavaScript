function tempatureConvert(degree, type) {
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
