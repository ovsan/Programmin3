class Kendani extends mayrakan {
    constructor(x, y, ind) {
        super(x, y, ind);
        this.energy = 50;

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
            console.log("kerav");
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in kendaniArr) {
                if (x == kendaniArr[i].x && y == kendaniArr[i].y) {
                    kendaniArr.splice(i, 1);
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
            if (this.energy <5) {
                this.die();
                this.energy = 10;
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

            var norkendani = new Kendani(x, y, this.index);
            kendaniArr.push(norkendani);

            matrix[y][x] = 3;
            this.multiply = 0;
        }
        console.log("bazm");
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in kendaniArr) {
            if (this.x == kendaniArr[i].x && this.y == kendaniArr[i].y) {
                kendaniArr.splice(i, 1);
                break;
            }
        }
       console.log("merav");
    }



}