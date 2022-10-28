const sumOfNumbersPromise = new Promise((resolve, reject) => {
    let sum = 0;

    for (let index = 0; index < 50; index++) {
        sum += index;
    }

    if (sum > 2000) {
        resolve(sum);
    } else {
        reject('Suma numerelor este prea mica');
    }
});

console.log(sumOfNumbersPromise);

sumOfNumbersPromise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

console.log('Calculam suma primelor numere de la 0 la 49');
