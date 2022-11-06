// function loadScript(src) {

//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = () => resolve(null, script);
//         script.onerror = () => reject(new Error("there is an error"));
//         document.head.append(script);
//     })
// }

// const promise = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js').then(
//     () => {
//         console.log("lodash called")
//         const val = _.chunk(["a", "b", "c", "d"], 2)
//         return val
//     }
// )
// .then((res) => {
//     console.log(res)
//     return 'hello'
// })
// .then(res => {
//     console.log(res)
//     return 'how are you'
// })
// .then(res => {
//     console.log(res)
// })m
// .catch(err => console.log(err))
// .finally(()=> console.log('promise done'))

// const catchError = (err) => {
//   console.log(err);
// };

// loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js",
//   (err, func) => {
//     if (err) {
//       catchError(err);
//     } else {
//       console.log("lodash called");
//       const val = _.chunk(["a", "b", "c", "d"], 2);
//       loadScript("test.js", (err, func) => {
//         if (err) {
//           catchError(err);
//         } else {
//           const res = testFunc(val);

//           loadScript("testTwo.js", (err, func) => {
//             if (err) {
//               catchError(err);
//             } else {
//               newTest(res);
//             }
//           });
//         }
//       });
//     }
//   }
// );





// const resolvedPromise = new Promise((resolve, reject) => {
//    setTimeout(() => resolve(console.log("resolved")), 2000)
// })


// const rejectedPromise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error(console.log('rejected'))), 2000)
//  })

// const meetWithFriend = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("I am happy"), 1000)
//     setTimeout(() => reject('I am Angry'), 1000)
// })

// meetWithFriend.then(function(res) {
//     console.log(res)
// })

// meetWithFriend.catch(function(res) {
//     console.log(res)
// })

// meetWithFriend.finally(function() {
//     console.log('return back home')
// })

const getUsersFromApi = () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'

    fetch('apiUrl').then(res => res.json()).then((json) => console.log(json))
}

getUsersFromApi()