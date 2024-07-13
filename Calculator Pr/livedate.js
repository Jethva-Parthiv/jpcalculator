let strd = "00000000.00"
function def(){
document.getElementById("dh1").innerHTML = strd
}
def()
let buttons = document.querySelectorAll(".btn")
let bbuttons = Array.from(buttons)
bbuttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target)
        let elemt = document.getElementById("dh1")
        if (e.target.innerHTML=="AC") {
            clear()
        }
        else if(e.target.innerHTML=="="){
            let str=document.getElementById("dh1").innerHTML 
            document.getElementById("dh1").innerHTML = eval(str)
        }
        else if(e.target.innerHTML=="C"){
            c()
        }
        else if(elemt.innerHTML == strd) {
            document.getElementById("dh1").innerHTML = ""
            let string = e.target.innerHTML
            document.getElementById("dh1").innerHTML += string
        }
        else if (elemt.innerHTML.length > 9) {
            alert("Display Is Full")
        }
        else {
            let string = e.target.innerHTML
            document.getElementById("dh1").innerHTML += string
        }

    })
})



function ans(a, b) {
    return a + b
}

const clear = () => {
    document.getElementById("dh1").innerHTML = strd
}
const c = () => {
    let e = document.getElementById("dh1").innerHTML
    let str = e.substring(0, e.length - 1)
    if (str.length == "0") {
        console.log(str.length);
        def()
    }
    document.getElementById("dh1").innerHTML = str
}



//    -->This Was My Logic For Calculator In HTMLAllCollection,CSS and JAVASCRIPT
// function ope() {

//     let v = this.innerHTML
//     // console.log(this.innerHTML)
//     let e = document.getElementById("dh1")
//     let l = e.innerHTML.length
//     if (e.innerHTML.length > 9) {
//         alert("Display Is Full")
//     }
//     else {
//         e.innerHTML += this.innerHTML
//     }

//     if (v == '+' || v == '-' || v == '/' || v == '*' || v == '%') {
//         localStorage.setItem("operator", `${v}`)
//         localStorage.setItem("loc", `${l}`)

//         // console.log(v)
//     }
// }


// function modulo() {
//     cal()
// }

// function cal() {
//     let e = document.getElementById("dh1").innerHTML
//     clear()
//     let op = localStorage.getItem("operator")
//     let loc = localStorage.getItem("loc")
//     // let v = e[loc]
//     loc = parseInt(loc)
//     let s1 = e.substring(0, loc)
//     let s2 = e.substring(loc + 1, e.length)
//     console.log(s1, s2)
//     a1 = parseInt(s1)
//     a2 = parseInt(s2)
//     // console.log(v)
//     let b;
//     let answer;
//     // let b=ans(a1,a2)
//     // console.log(typeof(b))
//     // console.log(b)
//     // // b=20
//     // console.log(typeof(answer))

//     if (op == '+') {
//         b = a1 + a2;
//         answer = b.toString();
//     }
//     else if (op == '-') {
//         b = a1 - a2;
//         answer = b.toString();
//     }
//     else if (op == '/') {
//         b = a1 / a2;
//         answer = b.toString();
//     }
//     else if (op == '*') {
//         b = a1 * a2;
//         answer = b.toString();
//     }
//     else {
//         b = a1 / 100;
//         answer = b.toString();
//     }

//     document.getElementById("dh1").innerHTML = answer
// }


// function a() {
//     let e = document.getElementById("dh1")
//     if (e.innerHTML == strd) {
//         document.getElementById("dh1").innerHTML = ""
//     }
//     if (e.innerHTML.length > 9) {
//         alert("Display Is Full")
//     }
//     else {
//         e.innerHTML += this.innerHTML
//     }
//     // console.log(this.innerHTML)
// }
// // document.getElementsByClassName("btn")[0].addEventListener("click", a);
// // document.getElementsByClassName("btn")[1].addEventListener("click", a);
// // document.getElementsByClassName("btn")[2].addEventListener("click", a);
// // document.getElementsByClassName("btn")[3].addEventListener("click", c);
// // document.getElementsByClassName("btn")[4].addEventListener("click", clear);
// // document.getElementsByClassName("btn")[5].addEventListener("click", a);
// // document.getElementsByClassName("btn")[6].addEventListener("click", a);
// // document.getElementsByClassName("btn")[7].addEventListener("click", a);
// // document.getElementsByClassName("btn")[8].addEventListener("click", cal);
// // document.getElementsByClassName("btn")[9].addEventListener("click", modulo);
// // document.getElementsByClassName("btn")[10].addEventListener("click", a);
// // document.getElementsByClassName("btn")[11].addEventListener("click", a);
// // document.getElementsByClassName("btn")[12].addEventListener("click", a);
// // document.getElementsByClassName("btn")[13].addEventListener("click", ope);
// // document.getElementsByClassName("btn")[14].addEventListener("click", ope);
// // document.getElementsByClassName("btn")[15].addEventListener("click", a);
// // document.getElementsByClassName("btn")[16].addEventListener("click", a);
// // document.getElementsByClassName("btn")[17].addEventListener("click", a);
// // document.getElementsByClassName("btn")[18].addEventListener("click", ope);
// // document.getElementsByClassName("btn")[19].addEventListener("click", ope);
