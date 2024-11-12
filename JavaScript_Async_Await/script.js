async function makeAsncRequest() {
    const url = 'https://dummyjson.com/users';
    const response = await fetch(url)
    const data = await response.json();

    return data;
}

makeAsncRequest().then((data) => {
    console.log(data)
})

//! make syncronac Request
// function makesyncRequest() {
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("load", () => {
//         console.log(xhr);
//     });
//     xhr.open("GET", "https://dummyjson.com/users", false);
//     xhr.send();
// }


function addTwoNumbers() {
    return 5 + 8
}


// throw new Error("Error in program")
// https://procodrr.vercel.app/?sleep=5000
// https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=5000
//https://dummy.restapiexample.com/api/v1/employees