/*

// Easy example of promise.
let aditya = 10;
let sahil = 40;

function promiseToYou() {
    return new Promise((resolve, reject) => {
        sahil += aditya;
        if (sahil == 50) {
            resolve(resolve);
        } else {
            reject("I did not get money form aditya");
        }
    })
}

function getFrankey() {
    console.log("lets eat Frankey");
}

promiseToYou().then(getFrankey()).catch((message) => {
    console.log(message)
})

*/

/*

const objects = [
    {
        name: 'Sahil',
        age: 20
    }, {
        name: 'Siddhesh',
        age: 19
    }
]

function printObjects() {
    setTimeout(() => {
        let join = '';
        objects.forEach((object) => {
            join += `${object.name} is ${object.age} years old\n`;
        });
        document.body.innerHTML = join;
    }, 1000);
}

function createObjects(object) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            objects.push(object);
            // if this is true the you will get error
            const err = false;

            if (!err) {
                resolve(object);
            } else {
                reject("Error : something went wrong")
            }

        }, 2000);
    });
}

createObjects({ name: "om", age: 20 }).then(printObjects)
    .catch((err) => console.log(err));


// Promise all 
const Promise1 = Promise.resolve("hello world");
const Promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    resolve(console.log("hello"));
    reject(console.log("bye"));
})
const Promise4 = Promise.resolve("hello world");

*/


// Promise Vs Callbacks

// 1.Callbacks

const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorialCallback(Callbacks, errCallback) {
    if (userLeft) {
        errCallback({
            Name: 'Aditya',
            age: 19
        });
    }
    else if (userWatchingCatMeme) {
        errCallback({
            message: "You are watching cat meme"
        })
    }
    else {
        Callbacks({
            message: "You are good to go"
        })
    }
}


watchTutorialCallback((message) => {
    console.log(message);
}, (message) => { console.log(message) });


// 2.Promises

function watchTutorialCallback1() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({ message: "something is wrong" })
        } else if (userWatchingCatMeme) {
            reject({ message: "something went wrong" })
        } else {
            resolve({ message: "everything is fine" })
        }
    })
}

watchTutorialCallback1().then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})



// another example of promises 

const recordVideoOne = new Promise((resolve, reject) => {
    setTimeout((
        resolve(() => {
            document.body.innerHTML = `<b>One Video is Recorded\n</b>`
        })
    ), 1000);
})
const recordVideoTwo = new Promise((resolve, reject) => {
    let video = '';
    setTimeout((
        resolve(() => {
            video += `<b>Two Video is Recorded\n</b>`
            return video;
        })
    ), 2000);
})
const recordVideoThree = new Promise((resolve, reject) => {
    setTimeout((
        resolve(() => {
            document.body.innerHTML = `<b>Three Video is Recorded</b>`
        })
    ), 3000);
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((video) => {
    document.body.innerHTML = video;
});
