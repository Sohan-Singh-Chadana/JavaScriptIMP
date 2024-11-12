const callOuter = (e) => {
    // console.log(e);
    console.table([{
        Descripition: "I am the outer one",
        Target: e.target,
        CurrentTarget: e.currentTarget,
    }]);
}
const callMiddle = (e) => {

    // console.log(e);
    console.table([{
        Descripition: "I am the Middle one",
        Target: e.target,
        CurrentTarget: e.currentTarget,
    }, ]);
}
const callInner = (e) => {
    // console.log(e);
    // e.stopPropagation();
    console.table([{
        Descripition: "I am the Inner one",
        Target: e.target,
        CurrentTarget: e.currentTarget,
    }, ]);
}

//? evenet bubbling phase
// document.querySelector("#outer").addEventListener("click", callOuter);
// document.querySelector("#middle").addEventListener("click", callMiddle);
// document.querySelector("#inner").addEventListener("click", callInner);

//? evenet capturing phase
document.querySelector("#outer").addEventListener("click", callOuter, true);
document.querySelector("#middle").addEventListener("click", callMiddle, true);
document.querySelector("#inner").addEventListener("click", callInner, true);