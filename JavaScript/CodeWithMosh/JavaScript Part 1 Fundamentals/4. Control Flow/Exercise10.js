function showStars(limit) {
    for (let i = 1; i <= limit; i++) {
        let str = "";
        for (let j = 0; j < i; j++) {
            str += "*";
        }
        console.log(str);
    }
}
showStars(5);
