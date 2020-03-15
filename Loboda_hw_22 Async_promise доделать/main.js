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

  promise.then(function () {
    console.log(1);
    return id;
  },
    function () {
      console.log(2);
      return id;
    })
    .then(function () {
      console.log(3);
      return Promise.reject(id);
    },
      function () {
        console.log(4);
      })
    .then(function () {
      console.log(5);
    },
      function () {
        console.log(6);
        if (id) {
          return Promise.reject(id);
        } else {
          return id;
        }
      })
    .then(function () {
      console.log(7);
      return id;
    },
      function () {
        console.log(8);
        return id;
      })
    .then(function () {
      console.log(9);
      return Promise.reject(id);
    },
      function () {
        console.log(10);
      })
    .then(function () {
      console.log(11);
    },
      function () {
        console.log(12);
      })
}