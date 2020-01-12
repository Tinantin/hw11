window.onload = function () {
    var box = document.getElementById('box');
    // console.log(box);

    box.style.background = 'red';
    box.style.border = '10px solid black';

    box.onclick = function(){
        // console.log('click');
        this.style.backgroundColor = 'yellow';
        this.style.borderColor = 'green';
    }
    document.addEventListener('click', function(){
        box.style.left = event.clientX + 'px';
        box.style.top = event.clientY + 'px';
        });
}
console.log('after onload');