window.onload = function () {
    var inputs = document.querySelectorAll('input');
    var area = document.querySelector('textarea');
    for (var i = 0;i < inputs.length; i++) {
        inputs[i].buffer = "";
    }
    setInterval(function () {
        for (var i = 0;i < inputs.length; i++) {
            if (inputs[i].value !== "" && inputs[i].value !== inputs[i].buffer) {
                area.value += inputs[i].value + ',';
                inputs[i].buffer = inputs[i].value;
            }
        }
    }, 1000);
}
