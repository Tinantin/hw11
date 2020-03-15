// let promise = true;


let promise = new Promise(function(resolve, reject) {
  console.log('start', 0);

   setTimeout(function(){
   
    // resolve()
    reject()
   }, 1000);

});


promise.then(function(){
 console.log('resolve',1)
},
function() {
  console.log('reject', 2);
})
.then(function(){
  console.log('resolve', 3);
},
function(){
  console.log('reject', 4);
})
.then(function(){
  console.log('resolve', 5);
},
function(){
  console.log('reject', 6);
})
.then(function(){
  console.log('resolve', 7);
},
function(){
  console.log('reject', 8);
})
.then(function(){
  console.log('resolve', 9);
},
function(){
  console.log('reject', 10);
})
.then(function(){
  console.log('resolve', 11);
},
function(){
  console.log('reject', 12);
})





// new Promise(function(resolve, reject) {

//   setTimeout(() => resolve(0), 1000); // (*)

// }).then(function(result) { // (**)

//   console.log(result); // 1
//   return result * 2;
// },
//   function() { 
//     console.log("rejected"); 
//     return Promise.reject();
//    }

// ).then(function(result) { // (***)

//   console.log(result); // 2
//   return result * 2;

// }).then(function(result) {

//   console.log(result); // 4
//   return result * 2;

// });





// var p1 = new Promise(function(resolve, reject) {
//   resolve("Успех!");
//   // или
//   // reject("Ошибка!");
// });

// p1.then(function(value) {
//   console.log(value); // Успех!
// }, function(reason) {
//   console.log(reason); // Ошибка!
// });