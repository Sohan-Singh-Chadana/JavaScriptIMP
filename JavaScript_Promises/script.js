const resolveBtn = document.querySelector("#resolve-btn");
const rejectBtn = document.querySelector("#reject-btn");

const p = new Promise((resolve, reject) => {
    resolveBtn.addEventListener("click", () => {
        resolve("Promise Resolved")
    });
    rejectBtn.addEventListener("click", () => {
        reject("Promise Rejected")
    });
});


p.then((data) => {
    console.log("hii", data)
}).catch((err) => {
    console.log("Hello", err)
}).finally(() => {
    console.log("Finally")
})


setTimeout(() => {
    console.log("Hii")
}, 200);