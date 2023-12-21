checkSpeed(60);

// Kunjesh
function checkSpeed(speed) {
    let floorValue = Math.floor(speed);
    let point = 0;
    if (floorValue > 70) {
        let value = floorValue - 70;
        // console.log("value is:" + value);
        if (value > 4) {
            point += Math.floor(value / 5);
            // console.log("point is" + point);
            if (point > 12) {
                console.log("Licence Suspended");
            } else {
                console.log(`${point} suspended`);
            }
        } else {
            console.log("ok");
        }
    } else {
        console.log("ok");
    }
}

// Sir
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint) {
        console.log("Ok");
        return;
    }
    const points = Math.floor((speed - speedLimit) / 5);
    if (points >= 12) {
        console.log("Licence Suspended");
    } else {
        console.log("Points", points);
    }
}
