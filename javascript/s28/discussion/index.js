// console.log(fetch('https://jsonplaceholder.typicode.com/posts'))


// the fetch method has one argument by default which is the url
//the url is the representative address of accessing rsource or data in another machine
//jsonplaceholder is used as a sample from a webserver where we can get data
// the then method allowed to process the data retrieved using fetch in another function
//the data returned in our fetch method passed inyo the then(), where we can receive it as a parameter
//response is simply a parameter name, it is however a convention , indicating that we are now getting to process the resposne from our server
//it is also a representation of what we got from our server, which is response.json
//response.json  is a method to parse the incoming data as peoper JS object we can further process
//add another then() method to do something to process
fetch('https://jsonplaceholder.typicode.com/posts') //default method is GET for getting data
.then((response) => response.json())
.then((data) => showPost(data));

/*fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((data) => console.log(data));
*/

//long version of the lone of code above
/*

fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response){
	// console.log(response.json());
	return response.json();
})
.then(function(data){
	console.log(data);
})

*/


//show posts
const showPost = (posts) => {
	let postEntries = '';

	posts.forEach((post) => {
		postEntries += 
		`<div id="post-${post.id}">
			<h3 id="post-title-${post.id}">${post.title}</h3>
			<p id="post-body-${post.id}">${post.body}</p>

			<button onclick="editPost(${post.id})">Edit</button>
			<button onclick="deletePost(${post.id})">Delete</button>
		</div>`
	});

	document.querySelector('#div-post-entries').innerHTML = postEntries;

}


//addPost
let addPostForm = document.querySelector('#form-add-post').addEventListener('submit', (event) => {
	event.preventDefault();

	fetch('https://jsonplaceholder.typicode.com/posts',{
		method: 'POST',//POST method for creating/inserting
		body: JSON.stringify({
			title: document.querySelector('#txt-title').value,
			body:  document.querySelector('#txt-body').value,
			userId: 101
		}),

		headers: {'Content-Type':'application/json'}

		})
	.then((response) => response.json())
	.then((data) => {alert("Successfully added")
		console.log(data)
	})

	document.querySelector('#txt-title').value = null;
	document.querySelector('#txt-body').value = null;
})



function editPost(id){
	let title = document.querySelector(`#post-title-${id}`).innerHTML;
	let body =  document.querySelector(`#post-body-${id}`).innerHTML;

	//alert(title);

	document.querySelector('#txt-edit-id').value = id;
	document.querySelector('#txt-edit-title').value = title;
	document.querySelector('#txt-edit-body').value = body;

	document.querySelector('#btn-submit-update').removeAttribute('disabled');

}

document.querySelector('#form-edit-post').addEventListener('submit', (event) => {
    event.preventDefault();

    const post_id = document.querySelector('#txt-edit-id').value;
    //PUT is the value of method this time because the action to be done is editing/updating.
    fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`, {
        method: 'PUT', //PUT method for updating/editing
        body: JSON.stringify({
            id: document.querySelector('#txt-edit-id').value,
            title: document.querySelector('#txt-edit-title').value,
            body: document.querySelector('#txt-edit-body').value,
            userId: 1
        }),
        headers: { 'Content-type': 'application/json' }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        alert('Successfully updated.');

        document.querySelector(`#post-title-${data.id}`).innerHTML = data.title;
        document.querySelector(`#post-body-${data.id}`).innerHTML = data.body;

        document.querySelector('#txt-edit-id').value = null;
        document.querySelector('#txt-edit-title').value = null;
        document.querySelector('#txt-edit-body').value = null;
        document.querySelector('#btn-submit-update').setAttribute('disabled', true);
    });
});



function deletePost(id){

	let title = document.querySelector(`#post-title-${id}`).innerHTML;

	fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		method: 'DELETE',
		headers: {'Content-Type' : 'application/json'}
	})
	.then((response) => response.json())
	.then((data) => { 
		alert(`Successfully deleted post #${id} titled ${title}.`);

		document.querySelector(`#post-${id}`).remove();
	});
}

document.querySelector('#delete-all').addEventListener('click', (event) => {

    event.preventDefault();

    alert('Successfully deleted all posts.');
    document.querySelector(`#div-post-entries`).remove();
});


