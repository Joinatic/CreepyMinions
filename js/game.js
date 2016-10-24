/**
 * Created by MeierMa on 08.09.2016.
 */
var field = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];


// field[5][10] = 1;
draw();
//fieldSetRange(1, 10, 5);
function draw() {


    var thtml = '';

    for (var i = 0; i < field.length; i++) {
        thtml += '<tr>';
        for (var j = 0; j < field[i].length; j++) {
            thtml += '<td class="x' + j + 'y' + i + '" onClick="placeTower(' + j + ',' + i + ')">&nbsp;&nbsp;' + field[i][j] + '</td>';
        }
        thtml += '</tr>';
    }


    $('#table').html(thtml);
}

function fieldSetRange(range, x, y) {
    draw();
    if (field[y][x - 1] === 0) {
        field[y][x - 1] = range + 1;
        fieldSetRange(range + 1, x - 1, y);
    } else {
        x = 10;
        if (field[y + 1][x] === 0) {
            range = (y + 1) - 5;
            field[y + 1][x] = range + 1;
            fieldSetRange(range + 1, x, y + 1)
        } else if (field[y - 1][x] === 0) {
            range = 5 - (y - 1);
            field[y - 1][x] = range + 1;
            fieldSetRange(range + 1, x, y - 1)
        } else if ((field[y + 1][x] === -1)) {
            fieldSetRange(1, x, 5)
        }
    }
    // console.log('end');
}

function placeTower(x, y) {
    if(!(x===0 && y===5) && !(x===11 && y===5)) {
        var testingPlacable = field;
        testingPlacable[y][x] = 1;
        var currentPath = findPath(testingPlacable, [5, 0], [5, 11]);

        if (!currentPath[0]) {
            field[y][x] = 0;

        } else {
            field[y][x] = 1;
        }


        draw();
    }

}

function drawWay(path){
    for(var i=0; i<path.length; i++){
        var selector='.x' + path[i][0] + 'y' + path[i][1];

        $(selector).animate({color: 'red'});
    }

}
