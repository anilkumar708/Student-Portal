import React, { useEffect } from "react";
import { useState } from "react";

const CallBack = () => {
  const details = [
    { name: "Anil", age: 27 },
    { name: "Kumar", age: 28 },
  ];
  const [posts, setPosts] = useState(details);

  // useEffect(() => {
  //   setPosts((posts) => details + createPost, { name: "Reddy", age: 29 });
  // }, []);
  return (
    <div>
      {posts.map((post, index) => {
        return <li>{post.name}</li>;
      })}
    </div>
  );
};

export default CallBack;

/////// Call Back Function ///////
// const posts = [
//   { name: "Anil", age: 27 },
//   { name: "Kumar", age: 28 },
// ];

// function getPost() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post, index) => {
//       output += `<li>${post.name}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(post, callBack) {
//   setTimeout(() => {
//     posts.push(post);
//     callBack();
//   }, 5000);
// }

// createPost({ name: "Reddy", age: 29 }, getPost);

////// Promise Function ////////
// const posts = [
//   { name: "Anil", age: 27 },
//   { name: "Kumar", age: 28 },
// ];

// function getPost() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post, index) => {
//       output += `<li>${post.name}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       const error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Something went wrong");
//       }
//     }, 5000);
//   });
// }

//createPost({ name: "Reddy", age: 29 }).then(getPost);

/////   Async/Await  //////
// async function start() {
//   await createPost({ name: "Reddy", age: 29 });
//   getPost();
// }
// start();

// async function fetchUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   console.log(data);
// }
//fetchUsers();

/////   Without Async/Await  //////
// export const getPosts = () => {
//   return axios.get("https://jsonplaceholder.typicode.com/posts");
// };
