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

function createObjects(objects1, callback) {
    setTimeout(() => {
        objects.push(objects1);
        callback();
    }, 2000);
}
// printObjects();
createObjects({ head: "Head3", body: "This is head3 body" }, printObjects);