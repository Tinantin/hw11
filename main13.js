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
    document.onclick = function(event) {
        let start = Date.now();
        let duration = 2000;
    
        let timer = setInterval(function() {
          let timePassed = Date.now() - start;
           box.style.left = (event.clientX * (timePassed / duration))  + 'px';
           box.style.top =  (event.clientY  * (timePassed / duration))  + 'px';
        
        //    console.log(timePassed);
        //    console.log(timePassed / duration);
    
    
          if (timePassed > duration) clearInterval(timer);
    
        }, 20);
    }
}
console.log('after onload');