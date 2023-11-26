const user = {
    username: "rivu",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);// ud

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


const chai = ()=>{//arrow function
    let username = "hitesh"
    console.log(this.username);
}

// chai() //ud

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // return is nessesary in {carly braces}



// const addTwo = (num1, num2) =>  num1 + num2 //implisit return no need to write retun statement in (paranthisis)
//&
// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})// object

console.log(addTwo(5,15));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()