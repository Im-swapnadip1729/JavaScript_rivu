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


