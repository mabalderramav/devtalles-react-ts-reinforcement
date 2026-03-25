const myPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(100);
    }, 2000);
    setTimeout(() => {
        reject(new Error('I am sorry, I lost my money'));
    }, 5000);
});

try {
    const myMoney = await myPromise;
    console.log(`my money is back: ${myMoney}`);
} catch (error) {
    console.warn(error);
} finally {
    console.log('the promise is finished');
}
