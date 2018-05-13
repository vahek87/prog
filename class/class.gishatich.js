var ClassM = require("./class.grass");
module.exports = class Gishatich extends LivingC {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.index = index;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    move() {
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
        if (newCell) {
            this.energy -= 3;
            matrix[this.y][this.x] = 1;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            this.x = newX;
            this.y = newY;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }
    eat() {
        var Xotaker = this.chooseCell(2);
        var Xot = this.chooseCell(1);
        var xot12 = random(Xot);
        var xotaker12 = random(Xotaker);
        if (xotaker12) {
            this.energy += 3;
            var newX = xotaker12[0];
            var newY = xotaker12[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 3;
            this.x = newX;
            this.y = newY;
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 78) {
                this.mul();
            }
        }
        else if (xot12) {
            this.energy++;
            var newX = xot12[0];
            var newY = xot12[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 3;
            this.x = newX;
            this.y = newY;

            //jnji xoti objekty
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            //kavelacnew bazmanalu masy
            if (this.energy >= 78) {
                this.mul();
            }
        }
        else {
            this.move();
            if (this.energy <= 0) {
                this.die();
            }
        }
    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            var grEat = new Gishatich(newX, newY, 3);
            gishatichArr.push(grEat);
            this.energy = 10;
            //jnji xoti objekty
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }

    }
    die() {
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
                matrix[this.y][this.x] = 1;
                break;
            }
        }
    }
}
