function calculateGrade(arr) {
    let sum = 0;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    console.log(average);

    if (average >= 90) {
        console.log("A");
    } else if (average >= 80) {
        console.log("B");
    } else if (average >= 70) {
        console.log("C");
    } else if (average >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}
calculateGrade([85.5, 89.83, 90, 94.5]);
