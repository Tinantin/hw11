window.onload = function () {

  var obj = [
    { 
      title: 'Title1',
      size: 100, 
      img: 'url' , 
      cost: 300
    }, 
    {
       title: 'Title2', 
       size: 200, 
       img: 'url',
       cost: 300 
      }, 
      { 
        title: 'Title2', 
        size: 150, 
        img: 'url', 
        cost: 300 
      }]


      function ViewController (){

      }
      ViewController.prototype.render = mass => {
        console.log('hjdcjhcd');
      }

      let viev = new ViewController();

      console.log(viev);




      // var card = document.querySelector('.block');
      // var list = document.createElement('div');

      // for(var i = 0; i <obj.length; i++) {

      //   var itemList = document.createElement('div');

      //   itemList.innerHTML += '<span>'+ 'Title:'+ ' ' + obj[i].title + ' ' + '</span>';
      //   itemList.innerHTML += '<span>' + 'Size:'+ ' ' + obj[i].size + ' ' + '</span>';
      //   itemList.innerHTML += '<span>' + 'Image:'+ ' ' + obj[i].img + ' ' + '</span>';
      //   itemList.innerHTML += '<span>' + 'Cost:'+ ' ' + obj[i].cost + ' ' + '</span>';

      //   itemList.style.border = '5px solid gray';
      //   itemList.style.marginTop = '10px';

      //   list.appendChild(itemList);
      // }
      // card.appendChild(list);

}
    console.log('after onload');



