function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            console.log(key, obj[key]);
        }
    }
}

showProperties(
    {
        name: 'kunjesh',
        age: 18,
        graduation: true,
        course: 'Computer Programming'
    }
)
