//խոտի կլասը
class Grass extends mayrakan {
    constructor(x, y, ind) {
        super(x, y, ind);



    }

 mul() {
        this.multiply++;
        if (this.multiply == 2) {
              statistics.grasscount++;
            var emptyCord = this.getDirections(0);

            var cord = random(emptyCord);
            if (cord) {
                statistics.cnvacxoter++;
                var x = cord[0];
                var y = cord[1];

                var norXot = new Grass(x, y, this.index);
                xotArr.push(norXot);

                matrix[y][x] = 1;
                this.multiply = 0;
               

            }
        }
    }


}
