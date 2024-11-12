//* Singleton
// Object.create



// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "sohan",
    "full name": "Sohan Singh Chadana",
    [mySym]: "mykey1",
    age: 23,
    location: "Ahmedabad",
    email: "sohan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser['email'])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


JsUser.email = "Sohan@fb.com";
// Object.freeze(JsUser)
JsUser.email = "Sohan@chatgpt.com";
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello JS user")
};
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name} `)
};
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sohan",
            lastname: "singh"
        }
    }
};
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
};
const obj4 = {
    5: "c",
    6: "d"
};

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'c', '6': 'd' }


const obj3 = {...obj1, ...obj2, ...obj4 };
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'c', '6': 'd' }

const user = [{
        id: 1,
        email: "S@gmail.com"
    },
    {
        id: 2,
        email: "S@gmail.com"
    },
    {
        id: 3,
        email: "S@gmail.com"
    },
];
const userid = user.map((user) => {
    return user.id
});
// console.log(userid)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)) // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)) // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))'' // true
// console.log(tinderUser.hasOwnProperty("isLogged")) // false


//*  =====================================
//*  Object de-sructure and JSON API Intro
//*  =====================================

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "hitesh",
}

// course.courseInstructor

const { courseInstructor: Instructor } = course

// console.log(Instructor)

const cityname = ["Udaipur", "Nathdwara", "Jaipur", "Jodhpur"];

// console.log(cityname[2]);

const [c1, city2, city3] = cityname;

// console.log(c1);


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


const js = {
    "results": [{
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Silje",
            "last": "Sørensen"
        },
        "location": {
            "street": {
                "number": 6500,
                "name": "Gyvelvænget"
            },
            "city": "København V",
            "state": "Syddanmark",
            "country": "Denmark",
            "postcode": 90191,
            "coordinates": {
                "latitude": "-46.2168",
                "longitude": "177.9068"
            },
            "timezone": {
                "offset": "+9:00",
                "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
            }
        },
        "email": "silje.sorensen@example.com",
        "login": {
            "uuid": "de5ea47f-e144-43c7-a8a0-1dc68a6e8760",
            "username": "angrybird857",
            "password": "paloma",
            "salt": "hrsnYBlF",
            "md5": "8ebf48cb22ecac355675307c5548414e",
            "sha1": "b1028ddb82972398d89a95fa7581eeaf47f9557a",
            "sha256": "7f6921a2d6883d3eabe1541e9ec714f01f3290ccd44e2a7671a15ce9c232ada8"
        },
        "dob": {
            "date": "1989-06-23T12:57:21.960Z",
            "age": 34
        },
        "registered": {
            "date": "2010-12-20T14:29:53.685Z",
            "age": 13
        },
        "phone": "64854406",
        "cell": "23035777",
        "id": {
            "name": "CPR",
            "value": "230689-1534"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/50.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/50.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/50.jpg"
        },
        "nat": "DK"
    }],
    "info": {
        "seed": "bb0d21246ec47a49",
        "results": 1,
        "page": 1,
        "version": "1.4"
    }
};
// console.log(js.results[0].name.first) // Silje
// console.log(js.results[0].location['state']) // Syddanmark
// console.log(js.results[0].email) // silje.sorensen@example.com
// console.log(js.results[0]['login']['password']) // paloma
// console.log(js.results[0]['dob']['date']) // 1989-06-23T12:57:21.960Z
// console.log(js.results[0]['picture']['thumbnail']) // https://randomuser.me/api/portraits/thumb/women/50.jpg
// console.log(js.results[0].id.name) // CPR
// console.log(js.info.seed) // bb0d21246ec47a49