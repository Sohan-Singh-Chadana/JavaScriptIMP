const coding = ['Js', 'ruby', "java", "python", 'cpp'];

// coding.forEach(function(item) {
//     console.log(item)
// })
// coding.forEach((item) => {
//     console.log(item)
// })

// function printMe(item) {
//     console.log(item)
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

const mycoding = [{
        languageName: "JavaScript",
        languageFileName: "js",
    },
    {
        languageName: "Java",
        languageFileName: "java",
    },
    {
        languageName: "pythone",
        languageFileName: "py",
    },
];

mycoding.forEach((item) => {
    console.log(item.languageName)
})