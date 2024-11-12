function makeHttpRequest(method, url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    const promise = new Promise((resolve, reject) => {
        xhr.addEventListener("load", () => {
            resolve(xhr.response);
        });
        xhr.addEventListener("error", () => {
            reject("Request failed");
        });
    });

    // xhr.addEventListener("load", () => {
    //     // console.log(xhr.response);
    //     callback(xhr.response)
    // })

    xhr.open(method, url);
    xhr.send();

    return promise;
}

//? using promises solve callback hello probleme

// makeHttpRequest("GET", "https://dummyjson.com/users")
//     .then((usersData) =>
//         makeHttpRequest(
//             "GET",
//             `https://dummyjson.com/posts/user/${usersData.users[0].id}`
//         )
//     )
//     .then((postsData) =>
//         makeHttpRequest(
//             "GET",
//             `https://dummyjson.com/comments/post/${postsData.posts[0].id}`
//         )
//     )
//     .then((commentsData) =>
//         makeHttpRequest(
//             "GET",
//             `https://dummyjson.com/users/${commentsData.comments[0].user.id}`
//         )
//     )
//     .then((usersData) => {
//         console.log(usersData);
//         const divelement = document.createElement("div");
//         divelement.className = "card";
//         divelement.innerHTML = `
//         <img src="${usersData.image}" width="50px" height="50px" >
//         <h2 style="color: crimson; display: inline-block; float: right;" >UserInfomation</h2>
//         <h3>UserName : <span>${usersData.firstName} ${usersData.lastName}</span></h3>
//         <h3>userAge : <span>${usersData.age}</span></h3>
//         <h3>UserId : <span>${usersData.id}</span></h3>
//         <h3>userEmail : <span>${usersData.email}</span></h3>
//                         `;
//         document.body.append(divelement);
//     }).catch((err) => {
//         console.log(err)
//     }).finally(() => {
//         console.log("Finally Request is completed")
//     })


//! using fetch api data
fetch("https://dummyjson.com/users")
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((usersData) => fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`))
    .then((response) => response.json())
    .then((postsData) => fetch(`https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
    .then((response) => response.json())
    .then((commentsData) => fetch(`https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
    .then((response) => response.json())
    .then((usersData) => {
        console.log(usersData)
        const divelement = document.createElement("div");
        divelement.className = "card";
        divelement.innerHTML = `
                <img src="${usersData.image}" width="50px" height="50px" >
                <h2 style="color: crimson; display: inline-block; float: right;" >UserInfomation</h2>
                <h3>UserName : <span>${usersData.firstName} ${usersData.lastName}</span></h3>
                <h3>userAge : <span>${usersData.age}</span></h3>
                <h3>UserId : <span>${usersData.id}</span></h3>
                <h3>userEmail : <span>${usersData.email}</span></h3>
                                `;
        document.body.append(divelement);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    })
    .finally(() => {
        console.log("Finally Request is completed");
    });







//? callback Hell old code
// makeHttpRequest("GET", "https://dummyjson.com/users", (usersData) => {
//     // console.log(usersData);
//     makeHttpRequest("GET", `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
//         // console.log(postsData);
//         makeHttpRequest("GET", `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
//             // console.log(commentsData);
//             makeHttpRequest("GET", `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (usersData) => {
//                 console.log(usersData)
//                 const divelement = document.createElement("div");
//                 divelement.className = 'card'
//                 divelement.innerHTML =
//                     ` <img src="${usersData.image}" width="50px" height="50px" >
//                     <h2 style="color: crimson; display: inline-block; float: right;" >UserInfomation</h2>
//         <h3>UserName : <span>${usersData.firstName} ${usersData.lastName}</span></h3>
//         <h3>userAge : <span>${usersData.age}</span></h3>
//         <h3>UserId : <span>${usersData.id}</span></h3>
//         <h3>userEmail : <span>${usersData.email}</span></h3>
//         <h3>userComment : <span>${commentsData.comments[0].body}</span></h3>
//                 `;
//                 document.body.append(divelement)
//             })
//         })
//     })
// });