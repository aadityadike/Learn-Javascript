const objects = [
    { head: "Head1", body: "This is head1 body" },
    { head: "Head2", body: "This is head2 body" }
]

function printObjects() {
    setTimeout(() => {
        let variable = '';
        objects.forEach((object) => variable += `<li>${object.body}</li>`);
        document.body.innerHTML = variable;
    }, 1000)
}

function createObjects(objects1) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            objects.push(objects1);
            let err = false;
            if (!err) {
                resolve(objects1);
            } else {
                reject("Error: something went wrong");
            }
        }, 2000)
    );

}

async function asyncObject() {
    await createObjects({ head: "Head3", body: "This is head3 body" });
    printObjects();
}

asyncObject();