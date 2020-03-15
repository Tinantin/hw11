function SuperArray(a, z, value) {
    var arr = new Array(a);

    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(z);
        for (var j = 0; j < arr[i].length; j++) {
            arr[i][j] = Math.floor(Math.random() * (value.max - value.min)
                + value.min);
        }
    }
    this.list = arr;
}

var valueArr = new SuperArray(10, 20, { min: 10, max: 55 });

SuperArray.prototype.render = function (separator) {
    if (!separator) separator = '---';

    separator = separator || '---';

    for (var i = 0; i < this.list.length; i++) {
        for (var j = 0; j < this.list[i].length; j++) {
            document.write(this.list[i][j] + ' ');
        }
        document.write('<br />');
    }

    for (var k = 0; k <= 20; k++) {
        document.write(separator);
    }
    document.write('<br />');
}
SuperArray.prototype.clear = function (direction, k) {
    if (direction == 'row' && k >= 0 && k < this.arr.length) {
        this.arr[k].fill(0, 0, this.arr.length + 1)
        this.render('/');
    } else if (direction == 'column' && k >= 0 && k < this.arr[0].length) {
        for (var i = 0; i < this.arr.length; i++) {
            this.arr[i][k] = 0;
        }
        this.render('/');
    } else {
        document.write('<br>err')
    }
}
data.clear('row', 0);

SuperArray.prototype.setMarker = function (obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.array[obj.y][obj.x] = '<b>&</b>';
    this.render();
    return this;
}
data.setMarker({ x: 6, y: 9 });

SuperArray.prototype.goTo = function (coordinates) {
    if (this.checkCoordinates(coordinates)) {
        this.mass[this.markerAdress.x][this.markerAdress.y] = parseInt(this.mass[this.markerAdress.x][this.markerAdress.y]);
        this.setMarker(coordinates);
    }
}
instance.goTo({ x: 2, y: 4 });

SuperArray.prototype.shift = function (direction) {
    this.array[this.y][this.x] = 0;
    if (direction === 'top') {
        this.y -= 1;
    } else if (direction === 'bottom') {
        this.y += 1;
    } else if (direction === 'left') {
        this.x -= 1;
    } else if (direction === 'right') {
        this.x += 1;
    }

    this.array[this.y][this.x] = '<b>&</b>';
    this.render();
    return this;
}
data.shift('top');
data.shift('left');
data.shift('bottom');
data.shift('right');

var data = new SuperArray();


console.log(valueArr);  