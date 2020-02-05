let data = [
  { title: 'Title1', size: 100, img: 'url', cost: 300}, 
  { title: 'Title2', size: 200, img: 'url',cost: 300}, 
  { title: 'Title2', size: 150, img: 'url', cost: 300}]

const block = document.querySelector('.block');
const titleInput = document.getElementById('title');
const prices = document.getElementById('price');

    function ViewController (){

    }
    ViewController.prototype.render = mass => {
      let items = mass.map(item => '<div' + ' class="block"' + '>' + 
      '<strong>' + 'Title:'+ '</strong>' + ' ' + item.title + '<br/>' +
      '<strong>' + 'Size:'+ '</strong>' + ' ' + item.size + '<br/>' +
      '<strong>' + 'Image:'+ '</strong>' + ' ' + item.img + '<br/>' +
      '<strong>' + 'Cost:'+ '</strong>' + ' ' + item.cost + '<br/>' +
        '</div>');
      block.innerHTML  = items.join('<br/>');

      
    }

    let viev = new ViewController();
    viev.render(data);
    
    titleInput.oninput = function() {
      let items = data.filter(item => 
        item.title.includes(titleInput.value)); 
      viev.render(items);
    };
    
    priceInput.oninput = function() {
      let prices = data.filter(item => 
        item.cost >= parseInt(priceInput.value));
      // console.log(prices);
      viev.render(prices);
    };

    document.getElementById("reset").onclick = function(e) {
      document.getElementById("title").value = "";
      document.getElementById("price").value = "";
      viev.render(data);
    };