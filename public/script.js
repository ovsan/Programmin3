var matrix = [];
var side = 20;
var xotArr = [];
var eatArr = [];
var gishatichArr = [];
var gishatichkerArr = [];
var kendaniArr = [];




var erk = 50;
var bar = 50;
var grasscount = 80;
var eatcount = 50;
var gishcount = 30;
var gishkercount = 20;
var kendanicount = 40;
var wheaterContainer;

var statistika = {
    "grasscount": 0,
    "eatcount": 0,
}

function setup() {
    for (var i = 0; i < erk; ++i) {
        matrix.push([]);
        for (var j = 0; j < bar; ++j) {
            matrix[i][j] = 0;
        }
    }


    fillMatrixWithChars(1, grasscount);
    fillMatrixWithChars(2, eatcount);
    fillMatrixWithChars(3, gishcount);
    fillMatrixWithChars(4, gishkercount);
    fillMatrixWithChars(5,kendanicount);

    noStroke()
    frameRate(80);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var eatgrass = new Eatgrass(j, i, 2);
                eatArr.push(eatgrass);
            } else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                xotArr.push(grass);

            }
            else if (matrix[i][j] == 3) {
                var gishatich = new Gishatich(j, i, 3);
                gishatichArr.push(gishatich);

            }
            else if (matrix[i][j] == 4) {
                var gishatich = new Gishatichaker(j, i, 4);
                gishatichArr.push(gishatich);

            }
            else if (matrix[i][j] == 5) {
                var kendani = new Kendani(j, i, 5);
                kendaniArr.push(kendani);

            }
        }
    }

    wheaterContainer = document.getElementById("wheater");

}


function draw() {
    var f = frameCount;
    var grassColor="green";
    console.log(f *= 2);


    if (f %40 >=5  && f % 40 <=10 ) {
        wheaterContainer.innerHTML = "Garun";
        wheaterContainer.style.color = "green";
         background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill('#0F0E0E');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4 && gishatichArr.length > 30) {
                fill('#cc3300');
                ellipse(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill('blue');
                rect(j * side, i * side, side, side);
            }

        }
    }

       

    } else if (f % 40 >=10 && f % 40 <=15 ) {
        wheaterContainer.innerHTML = "Amar";
        wheaterContainer.style.color = "#24F967";
         background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("#24F967");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill('#0F0E0E');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4 && gishatichArr.length > 30) {
                fill('#cc3300');
                ellipse(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill('blue');
                rect(j * side, i * side, side, side);
            }

        }
    }

        
    } else if (f % 40 >=15 && f % 40 <=20 ) {
        wheaterContainer.innerHTML = "Ashun";
        wheaterContainer.style.color = "#B9A303";
         background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("#B9A303");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill('#0F0E0E');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4 && gishatichArr.length > 30) {
                fill('#cc3300');
                ellipse(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill('blue');
                rect(j * side, i * side, side, side);
            }

        }
    }

       
    } else if (f % 40 >= 25 && f %40 <=30 ) {
        wheaterContainer.innerHTML = "Dzmer";
        wheaterContainer.style.color = "#B6B6B3";
         background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("white");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill('#0F0E0E');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4 && gishatichArr.length > 30) {
                fill('#cc3300');
                ellipse(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill('blue');
                rect(j * side, i * side, side, side);
            }

        }
    }

      
    }

   



    for (var i in xotArr) {
        xotArr[i].mul();
        statistika.grasscount++;
    }

    for (var i in eatArr) {
        eatArr[i].eat();
        statistika.eatcount++;
    }

    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }

    if (gishatichArr.length > 30) {
        for (var i in gishatichkerArr) {
            gishatichkerArr[i].eat();
        }

    }
    for (var i in kendaniArr) {
        kendaniArr[i].eat();

    }

}





function fillMatrixWithChars(charType, charCount) {
    var c = 0;
    while (c < charCount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[x][y] == 0) {
            matrix[x][y] = charType;
            c++
        }
    }
}