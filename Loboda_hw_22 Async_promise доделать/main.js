window.onload = function () {

  const promise = new Promise(function (resolve, reject) {
    console.log(0);
    setTimeout(function () {
      const id = prompt('ID');
      if (id) {
        resolve(id)
      } else {
        reject(id)
      }
    }, 1000);
  })


}