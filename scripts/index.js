const loadUserProfile = () => {
	// Get username, job title and profile picture dynamically from the script instead of hard-coding the data.
	// 1. Identify locations of username, job title and profile picture by class
	const usernameElems = document.querySelectorAll(".data-username");
	const jobTitleElem = document.querySelector(".data-jobtitle");
	const profilePicElems = document.querySelectorAll(".data-profilepic");

	// 2. Manipulate ; assign new data
	// iterate through usernameElems
	// change the innerHtml
	for (let el of usernameElems) {
		el.innerHTML = userProfile.username;
	}
	jobTitleElem.innerHTML = userProfile.jobtitle;

	for (let pro of profilePicElems) {
		pro.src = userProfile.profilepic;
	}
};

/**
 * Add click event on the button
 * call the function createPost
 *
 * Get 2 information : username, post
 *
 * Get usrname : select a dom element, get data from the element
 * Get post :  select dom element with  class="data-post"
 *
 *
 * Select  and Manipulate
 *
 */

const createPost = () => {
	const username = document.querySelector(".data-username").innerHTML;
	const post = document.querySelector(".data-post").value;
	console.log("username, post", username, post);

	if (post) {
		// Create ane wDOM element
		// Select Parent : section : posts
		const parentDiv = document.querySelector(".posts");
		// Create a div, with class = posts__item
		const postsItemDiv = document.createElement("div");
		postsItemDiv.classList.add("posts__item");
		// Create 3 children : posts__username, posts__content, posts__like
		// Add them to postsItemDiv
		const postsUsernameDiv = document.createElement("div");
		postsUsernameDiv.classList.add("posts__username");
		postsUsernameDiv.innerText = username + " Posted";

		const postsContentDiv = document.createElement("div");
		postsContentDiv.classList.add("posts__content");
		const postcontent = document.createElement("p");
		postcontent.innerHTML = post;
		postsContentDiv.append(postcontent);

		const postsLikeDiv = document.createElement("div");
		postsLikeDiv.classList.add("posts__like");
		// Follow the same
		postsItemDiv.append(postsUsernameDiv);
		postsItemDiv.append(postsContentDiv);
		postsItemDiv.append(postsLikeDiv);

		// Append this div to my Parent : section : posts
		parentDiv.prepend(postsItemDiv);
	} else {
		// Empty post
		// error handling
		alert("Error: You have empty post");
	}
};

loadUserProfile();
