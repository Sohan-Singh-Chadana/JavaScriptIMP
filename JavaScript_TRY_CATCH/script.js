// const user = {
//     name: "Sohan",
//     age: 34,
// }


// try {
//     // console.log(a)
//     console.log(user.address)
// } catch (err) {
//     console.dir(err.message)
// } finally {
//     console.log("HE110")
// }


// console.log(3 + 7)
// console.log("Hello World")




async function makeAsncRequest() {
    try {
        const url = 'https://dummyjson.com/users';
        const response = await fetch(url)
        const data = await response.json();
        console.log(data)
        data.users.map((itme, index) => {
            // console.log("FullName : ", itme.firstName, itme.lastName, "Gender : ",
            //     itme.gender)

            const pelem = document.createElement("p")
            pelem.innerHTML = `
            ${index+1}. UsersName : ${itme.firstName} ${itme.lastName}
            `
            document.body.append(pelem)
        })
        return data;
    } catch (error) {
        console.log(error)
    }
    console.log("Hello")
}

makeAsncRequest()