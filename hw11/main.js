function SuperMath() {
    this.obj = {};
    x = prompt("Enter X");
}
SuperMath.prototype.sum = function (a, b) {
  alert(a + b);
}
SuperMath.prototype.sub = function (a, b) {
  alert(a - b);
}

SuperMath.prototype.div = function (a, b) {
  if (b == 0) {
      console.error('Делить на ноль нельзя!');
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

SuperMath();