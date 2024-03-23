// Declare some global data
const username = "Ankur Bag";
const jobtitle = "Staff Software Engg";
const profilepic = "./assets/images/man.png";

// Get username, job title and profile picture dynamically from the script instead of hard-coding the data.
// 1. Identify locations of username, job title and profile picture by class
const usernameElems = document.querySelectorAll(".data-username");
const jobTitleElem = document.querySelector(".data-jobtitle");
const profilePicElems = document.querySelectorAll(".data-profilepic");

// 2. Manipulate ; assign new data
// iterate through usernameElems
// change the innerHtml
for (let el of usernameElems) {
	el.innerHTML = username;
}
jobTitleElem.innerHTML = jobtitle;

for (let pro of profilePicElems) {
	console.dir(pro);
	pro.src = profilepic;
}
