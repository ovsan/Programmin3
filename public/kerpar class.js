class Kerpar extends mayrakan {
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

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
           console.log("sharjvec");
        }

    }
    eat() {

        var emptyCord = this.getDirections(4);

        var cord = random(emptyCord);

        if (cord) {
           // console.log("kerav");
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in gkerparArr) {
                if (x == kerparArr[i].x && y == kerparArr[i].y) {
                    kerparArr.splice(i, 1);
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

            var norKerpar = new Kerpar(x, y, this.index);
            kerparArr.push(norKerpar);

            matrix[y][x] = 3;
            this.multiply = 0;
        }
       // console.log("bazm");
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in kerparArr) {
            if (this.x == kerparArr[i].x && this.y == kerparArr[i].y) {
               kerparArr.splice(i, 1);
                break;
            }
        }
       // console.log("merav");
    }



}