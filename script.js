function manipulateData(inputArray) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(inputArray);
        }, 3000);
    });
}

const outputElement = document.getElementById('output');

const inputArray = [1, 2, 3, 4];

manipulateData(inputArray)
    .then(filteredArray => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const evenNumbers = filteredArray.filter(num => num % 2 === 0);
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then(evenNumbers => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const multipliedArray = evenNumbers.map(num => num * 2);
                resolve(multipliedArray);
            }, 2000);
        });
    })
    .then(resultArray => {
        outputElement.innerText = resultArray.join(', ');
    })
    .catch(error => {
        outputElement.innerText = `Error: ${error.message}`;
    });
