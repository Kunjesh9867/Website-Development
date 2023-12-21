function countTruthy(...array) {
    let numberOfTruthyValue = 0;
    for (let x of array) {
        if (x) {
            numberOfTruthyValue++;
        }
    }
    console.log(numberOfTruthyValue);
}

countTruthy([NaN, false, "", undefined, null, 0, 1]);
