function SuperMath() {
    this.obj = {};
}
SuperMath.prototype.sum = function (a, b) {
  alert(a + b);
}
SuperMath.prototype.sub = function (a, b) {
  alert(a - b);
}

SuperMath.prototype.div = function (a, b) {
  if (b == 0) {
    alert('Делить на ноль нельзя!');
  }
  alert(a / b);
}

SuperMath.prototype.mul = function (a, b) {
  alert(a * b);
}

SuperMath.prototype.mod = function (a, b) {
  alert(a % b);
}
SuperMath.prototype.input = function(){
  this.obj.X = prompt('Введите число X: ',0);
  this.obj.Y = prompt('Введите число Y: ',0);
  this.obj.znak = prompt('Введите znak(возможные варианты znak=>  `+ - / * %`): ', "/");
}
SuperMath.prototype.check = function (obj, val) {
  var val = (val == undefined) ? confirm('Хотите произвести действие "' + obj.znak + '" c X:' + obj.X + ' и Y' + obj.Y) : val;

  if (val) {
      switch(obj.znak) {
          case '+':
              this.sum(obj.X, obj.Y);
              break;
          case '-':
              this.sub(obj.X, obj.Y);
              break;
          case '/':
              this.div(obj.X, obj.Y);
              break;
          case '*':
              this.mul(obj.X, obj.Y);
              break;
          case '%':
              this.mod(obj.X, obj.Y);
              break;
      }
  } else {
      this.input();
      this.check(this.obj, true);
  }
}
SuperMath();