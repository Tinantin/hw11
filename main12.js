function SuperArray(n, m, value){
    var arr = new Array(n);
  
    for(var i = 0; i < arr.length; i++){
        arr[i]= new Array(m);
        for(var j = 0; j < arr[i].length; j++){
            arr[i][j] = Math.floor(Math.random()*(value.max - value.min) 
            + value.min);
        }
    }
  
    this.list = arr;
  }

  SuperArray.prototype.render = function(separator){
    if(!separator) separator = '-';

    separator = separator || '-';

    for(var i = 0; i < this.list.length; i++){
        for(var j = 0; j < this.list[i].length; j++){
            document.write(this.list[i][j] + ' ');
        }
        document.write('<br />');
    }

    for(var k = 0; k <= 20; k++){
        document.write(separator);
    }
    document.write('<br />');
}


  var valueArr = new SuperArray(10, 20, { min: 10, max: 55 });

  console.log(valueArr);  