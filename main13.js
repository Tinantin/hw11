window.onload = function () {
    var inputs = document.querySelectorAll('input');
    var area = document.querySelector('textarea');
    for (var i = 0;i < inputs.length; i++) {
        inputs[i].buffer = "";
    }
}
