function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`outerVariable ${outerVariable}`)
        console.log(`innerVariable ${innerVariable}`)
    }
}

// newFunction is storing the return value of outerFunction.
const newFunction = outerFunction("outside")
console.log(newFunction)

// here it get called.
newFunction("inside")

/*--------------------------------------------------------------------------------*/

// closures in fetch Api

function fetchApi(url) {
    let output = ""
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            data.forEach((user) => {
                output += `<ul><li>${user.title}</li></ul>`
            })
            document.getElementById("api-data").innerHTML = output
        })
}

fetchApi("https://jsonplaceholder.typicode.com/posts")