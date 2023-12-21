function isLandscape(width, height) {
    return width > height ? true : false;
}

function isLandscape2(width, height) {
  return width > height;
}

console.log(isLandscape(5, 10));
console.log(isLandscape(50, 10));
console.log(isLandscape(5, 5));
