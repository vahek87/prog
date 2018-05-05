var matrix = [];
var grassArr = [];
var grassEaterArr = [];
var gishatichArr = [];
var valodArr = [];
var cols = 25;
var rows = 25;
var side = 15;
var xotqanak = 100;
var count = 50;
var count1 = 5;
var valqanak = 1;
function setup() {
    background('#acacac');
    for (var i = 0; i < cols; i++) {
        matrix[i] = [];
        for (var j = 0; j < rows; j++) {
            matrix[i][j] = 0;
        }
    }
   while (xotqanak > 0) {
        var x = Math.round(random(cols - 1));
        var y = Math.round(random(rows - 1));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
            xotqanak--;
        }
    }
    while (count > 0) {
        var x = Math.round(random(cols - 1));
        var y = Math.round(random(rows - 1));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2;
            count--;
        }
    }
    while (count1 > 0) {
        var x = Math.round(random(cols - 1));
        var y = Math.round(random(rows - 1));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
            count1--;
        }
    }
    while (valqanak > 0) {
        var x = Math.round(random(cols - 1));
        var y = Math.round(random(rows - 1));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4;
            valqanak--;
        }
    }
    /*
    matrix = [
        [3, 0, 1, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 1, 0, 2, 0],
        [0, 0, 1, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 3]
    ];
    */
    console.log(matrix);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
             if (matrix[y][x] == 2) {
                var gr = new GrassEater(x, y, 2);
                grassEaterArr.push(gr);
            }
            if (matrix[y][x] == 3) {
                var gish = new Gishatich(x, y, 3);
                gishatichArr.push(gish);
            }
            if (matrix[y][x] == 4) {
                var gish = new Valod (x, y, 4);
                valodArr.push(gish);
            }
        }
    }
    console.log(grassArr);
    console.log(grassEaterArr);
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
}
function draw() {
    
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in valodArr) {
        valodArr[i].move();
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill('#acacac');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill('yellow');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill('red');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill('black');
                rect(x * side, y * side, side, side);
            }
        }
    }
    
}

