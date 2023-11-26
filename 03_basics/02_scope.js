// let a = 10
// const b = 20
// var c = 30
// console.log(a);
// console.log(b);
// console.log(c);

//var c = 300
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a);
// console.log(b);
// console.log(c);//  print value c is not scope indipendent

let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); // block scope
    
}

// console.log("OUTER: ",a);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);//can't be accesed
}

// console.log(username);//can't be accesed


// ++++++++++++++++++ interesting ++++++++++++++++++
function addOne(num) {
    return num+1
}

addOne(5)

const addTwo = function(num){//expression
    return num + 2
}

addTwo(6)
