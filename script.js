//callback
// setTimeout(() => {
// console.log("testing settimeout")
// },3000)

//APIs

// console.log(date)

// console.log(date.toLocaleTimeString);
// const date = new Date()
// const dateString = new Date().toLocaleDateString();
// const timeString = new Date().toLocaleTimeString();

//   document.getElementById("timer").innerText = timeString;
//   document.getElementById("date").innerText  = dateString;
//   console.log(timeString)

// setInterval(() => {
//     const date = new Date()
//     const dateString = new Date().toLocaleDateString();
//     const timeString = new Date().toLocaleTimeString();

//     document.getElementById("timer").innerText = timeString;
//     document.getElementById("date").innerText  = dateString
//     console.log(timeString)
// },1000)

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => {
//     json.forEach((post) => {
//       document.getElementById("postovi").innerHTML += `
//         <div class="postovi">
//         <h2>${post.title}</h2>
//         <p>${post.title} </p>
//     </div>
//         `;
//     });
//   });

// fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
// .then((res) => res.json())
// .then((data) => {
//     data.forEach((cat) => {
//         document.getElementById("usa").innerHTML +=`
//         <div class="card">
// //         <h2>${cat.fact}</h2>
// //
// //       </div>
//         `
//     });
// })

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => {
//     json.forEach((post) => {
//       document.getElementById("posts").innerHTML += `
//       <div class="card">
//         <h2>${stpo.title}</h2>
//         <p>${post.body}</p>
//       </div>
//       `;
//     });
//   });

fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  .then((res) => res.json())
  .then((json) => {
    // json.forEach((niza) => {
    // document.getElementById("usa").innerHTML += `
    //     <div class="card">
    //     <p>${json.data}</p>
    //     </div> 
    //     `;
      json.data.forEach(element => {
        document.getElementById("karta").innerHTML += `
        <div class="card">
        <p>${element.Nation}</p>
        <p>${element.Year}</p>
        <p>${element.Population}</p>
        </div> 
        `;
        });
  });

//   });

fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  .then((res) => res.json())
  .then((json) => console.log(json))