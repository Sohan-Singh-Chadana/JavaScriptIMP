//* object Literal

const car1 = {
    name: "Honda City",
    manufactoring: "Honda",
    fuelCapacity: 40,
    isAutomatic: false,
    greetMe: function() {
        console.log("Hello my Dear  Sohan ");
    },
};
// car1.greetMe()

const car2 = {
    name: "Sonet",
    manufactoring: "Kia",
    fuelCapacity: 45,
    isAutomatic: true,
};

// console.log(car1);
// console.log(car2);

// console.log(car1.name, car1.fuelCapacity, car1.isAutomatic, car1.manufactoring)
// console.log(car2["name"], car2['fuelCapacity'], car2["isAutomatic"], car2["manufactoring"])

car1.color = "black";
car1.isAutomatic = true;

// console.log(car1)

//* Object using new keyword

// let myDetail = {
//     name: "Sohan Singh",
//     title: "I am Learn Frontend Devlopment",
//     expertise: ["#frontend", "#JavaScript", "#webdesing"],
//     followers: 0,
// }

let myDetail = new Object();
myDetail.name = "Sohan Singh";
myDetail.title = "Become frontend Devloper";
myDetail.expertise = ["#frontend", "#JavaScript"];
myDetail.followers = 0;
myDetail.greetMe = function() {
    console.log("Hello my Dear  Sohan ");
};

// console.log(myDetail);

//* object using Constructor Method;

// {
//     instructor: "Chirag Goel",
//     title: "JavaScript Foundations",
//     description: "JavaScript Programming  Course",
//     language: "Hinglish",
//     duration: 10,
//     fees: "free",
//     startDate: "5 April 2023",
// }

// function Course(
//     instructor,
//     title,
//     description,
//     language,
//     duration,
//     fees,
//     startDate
// ) {
//     this.instructor = instructor;
//     this.title = title;
//     this.description = description;
//     this.language = language;
//     this.duration = duration;
//     this.fees = fees;
//     this.startDate = startDate;
// }

// let JavaScriptCourse = new Course(
//     "Chirag Goel",
//     "JavaScript Foundations",
//     "JavaScript Programming  Course",
//     "Hinglish",
//     10,
//     "free",
//     "5 April 2023"
// );

class Course {
    constructor(
        instructor,
        title,
        description,
        language,
        duration,
        fees,
        startDate
    ) {
        this.instructor = instructor;
        this.mytitle = title;
        this.description = description;
        this.language = language;
        this.duration = duration;
        this.fees = fees;
        this.startDate = startDate;
    }
}

let JavaScriptCourse = new Course(
    "Chirag Goel",
    "JavaScript Foundations",
    "JavaScript Programming  Course",
    "Hinglish",
    10,
    "free",
    "5 April 2023"
);

let fullstackCourse = new Course(
    "Chirag Goel",
    "Fullstack Developement",
    "JavaScript Programming  Course",
    "Hinglish",
    20,
    "free",
    "5 May 2023"
)


delete JavaScriptCourse.description

JavaScriptCourse.description = null;

// console.log(JavaScriptCourse);
// console.log(fullstackCourse);

// console.log(Object.keys(JavaScriptCourse));
// console.log(Object.values(JavaScriptCourse));


// Object.freeze(JavaScriptCourse);
// Object.seal(JavaScriptCourse);

JavaScriptCourse.instructorCompany = "Microsoft";
JavaScriptCourse.duration = 14;
// console.log(JavaScriptCourse)

for (let key in JavaScriptCourse) {
    // console.log(JavaScriptCourse[key]);
};


const user2 = {
    firstName: "Adarsh",
    lastName: "Singh",
    address: {
        city: "Bangalore",
        pinCode: "876876",
        state: "Karnataka",
        moreDetails: {
            population: 78979798,
            area: "789spkm",
        }
    }
}