function area(shape, width, height) {
    var area = width * height;
    return "Yo soy " + shape + " con area de " + area + " cm²";
}
document.body.innerHTML = area("rectangulo", 30, 15);
