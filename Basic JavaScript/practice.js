/*

const body = document.body;
body.append("hello world");

const div = document.createElement("div");
div.innerText = "hello Aditya";
// you can also use textContent.
div.innerHTML = "hello Aditya";
// you can also use append.
body.appendChild(div);
*/

/*
// The difference between textContent & innerText 
const div = document.querySelector("div");
console.log(div.textContent);
console.log(div.innerText);
*/

// const body = document.body
// const div = document.createElement("div");
// div.innerHTML = "<h1> hello Aditya </h1>";
// body.append(div);

const div = document.querySelector("div");
const hello = document.querySelector("#hello");
const bye = document.querySelector("#bye");

// hello.remove();
bye.innerHTML = "byeee";

hello.dataset.newName = "somewhat";

console.log(hello.getAttribute("id"));
console.log(bye.id);

hello.setAttribute("id", "hey");
console.log(hello.getAttribute("id"));

hello.id = "some";
console.log(hello.id);
hello.removeAttribute("id");

console.log(hello.dataset);

hello.classList.add("new-class");
hello.classList.remove("hi1");
// toggle : if the class exitst it will delete that and if it does not exitst it will add it. you can manipulate that with true or false
hello.classList.toggle("new-class");
// hello.classList.toggle("new-class", false);

bye.style.backgroundColor = "red";
