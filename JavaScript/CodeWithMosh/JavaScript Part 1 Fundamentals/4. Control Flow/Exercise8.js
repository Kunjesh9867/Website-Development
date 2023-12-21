function sum(limit) {
    let multiple = 0;
    if (limit < 0) {
        console.log("Please enter the number greater than 0");
    } else {
        for (let index = 0; index <= limit; index++) {
            if (index % 3 == 0 || index % 5 == 0) {
                multiple += index;
            }
        }
        console.log(multiple);
    }
}

sum(10); // 33
