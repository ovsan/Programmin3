//գիշատիչակեր
class Gishatichaker extends mayrakan {
    constructor(x, y, ind) {
        super(x, y, ind);
        this.energy = 40;

    }


    move() { 
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
           // console.log("sharjvec");
        }

    }
    eat() {

        var emptyCord = this.getDirections(3);

        var cord = random(emptyCord);

        if (cord) {
           // console.log("kerav");
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in gishatichArr) {
                if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }
            if (this.multiply == 1) {
                this.mul()
                this.multiply = 0;
            }

        } else {
            this.move();
            this.energy--;
            if (this.energy < 5) {
                this.die();
                //this.energy = 10;
            }
        }
    }
    mul() {
        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var norGishatich = new Gishatich(x, y, this.index);
            gishatichArr.push(norGishatich);

            matrix[y][x] = 3;
            this.multiply = 0;
        }
       // console.log("bazm");
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gishatichkerArr) {
            if (this.x == gishatichkerArr[i].x && this.y == gishatichkerArr[i].y) {
                gishatichkerArr.splice(i, 1);
                break;
            }
        }
       // console.log("merav");
    }



}