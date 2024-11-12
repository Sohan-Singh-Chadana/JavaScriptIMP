// document.getElementById('owl').onclick = function() {
//     alert("hello owl")
// };

//* attachEvent()
//* Jequery  - on

//*  type, timeStamp, defaultPrevented
//* target, toElemeent, srcElemet , currentTarget
//*  clientX, clientY, screenX , screenY
//*  altKey, ctrlKey , shiftkey , keyCode

const timeStamp = document.querySelector("#timeStamp");
// const para = document.createElement('p')
// timeStamp.innerHTML = `innerWidth : ${e.view.innerWidth}`
// timeStamp.innerHTML = para.classList.add('circal')
// timeStamp.append(para)

//? upar se niche ki or
// document.querySelector('#images').addEventListener('click', (e) => {
//     console.log('clicked inside the ul')
// }, true);
// document.querySelector('#owl').addEventListener('click', (e) => {
//     console.log('owl clicke')
// }, true);

//? niche se upar ki or
// document.querySelector('#images').addEventListener('click', (e) => {
//     console.log('clicked inside the ul')
// }, false);
// document.querySelector('#owl').addEventListener('click', (e) => {
//     console.log('owl clicke')
//     e.stopPropagation()
// }, false);

// document.getElementById("google").addEventListener("click", function(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google clicked")
// }, false)

const images = document.querySelector("#images").addEventListener("click", function(e) {
        // console.dir(e)
        console.log(e.target.tagName);
        if (e.target.tagName === "IMG") {
            console.log(e.target.id)
            let removeIt = e.target.parentNode
            removeIt.remove();
        }
    }, false)
    // removeIt.parentNode.removeChild(removeIt);