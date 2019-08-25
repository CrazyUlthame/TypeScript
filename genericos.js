function randomElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var colors = ['violet', 'indigo', 'blue', 'green'];
var randomColor = randomElem(colors);
console.log(randomColor);
