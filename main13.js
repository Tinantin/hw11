window.onload = function () {
    var box = document.getElementById('box');
    // console.log(box);

    box.style.background = 'red';
    box.style.border = '10px solid black';

    box.onclick = function(){
        this.style.backgroundColor = 'yellow';
        this.style.borderColor = 'green';
    }
    
}
console.log('after onload');