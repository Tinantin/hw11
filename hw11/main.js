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


SuperMath();