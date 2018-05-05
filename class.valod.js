class Valod extends LivingC {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 10;
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
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    move() {
        this.energia();
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;
            this.x = newX;
            this.y = newY;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }
    energia(){
        var found = [];        
         for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 1) {
                    found.push(this.directions[i]);     
                     for (var i in grassArr) {
                        if (x == grassArr[i].x && y == grassArr[i].y){
                            grassArr[i].multiply /= 2;
                            this.energy += Math.round(grassArr[i].multiply /= 2);
                            
                        }
                    }               
                }
                else if (matrix[y][x] == 2) {
                    found.push(this.directions[i]);
                     for (var i in grassEaterArr) {
                        if (x == grassEaterArr[i].x && y == grassEaterArr[i].y){
                            grassEaterArr[i].energy /= 2;
                            this.energy += Math.round(grassEaterArr[i].energy /= 2);
                            
                        }
                    }
                }
                else if (matrix[y][x] == 3) {
                    found.push(this.directions[i]);
                    for (var i in gishatichArr) {
                        if (x == gishatichArr[i].x && y == gishatichArr[i].y){
                            gishatichArr[i].energy /= 2;
                            this.energy += Math.round(gishatichArr[i].energy /= 2);

                        }
                    }
                }
            }
        }
        if(this.energy >= 100){
            this.mul();
            this.energy = 0;
        }
        console.log(found);
        console.log(this.energy);
        
    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;
            var grEat = new Valod(newX, newY, 2);
            valodArr.push(grEat);
            this.energy = 0;

        }
    }
}