function saveToLocalStorage(event){
	event.preventDefault();
	const name=event.target.username.value;
    const email=event.target.emailId.value;
	const obj={
        name,
		email
		};
    axios.post("https://crudcrud.com/api/94cc02e44d194b299d383816afce8752/crudPractice",obj)
    .then((response)=>{
        console.log(response);
    })
    .catch((err)=>{
        console.log(err)
    })
	//localStorage.setItem(obj.email,JSON.stringify(obj));
	//showExpensesOnScreen(obj);
}
function showExpensesOnScreen(user){
	const parentNode=document.getElementById("listOfusers");
	const childHTML = `<li id=${user.name}>${user.name}- ${user.email}
                                        <button onclick=deleteUser('${user.email}')> Delete User </button>
										<button onclick=editUserDetails('${user.name}','${user.email}')>Edit User </button></li>`;
	parentNode.innerHTML=parentNode.innerHTML+childHTML;
}

function deleteUser(emailId){
	console.log(emailId)
	localStorage.removeItem(emailId);
	removeUserFromScreen(emailId);
}
function removeUserFromScreen(emailId){
	const parentNode = document.getElementById('listOfusers');
	const childNodeToBeDeleted = document.getElementById(emailId);

	parentNode.removeChild(childNodeToBeDeleted);
}
function editUserDetails(name,email){

	document.getElementById("name").value = name;
	document.getElementById("email").value =email;
	

	deleteUser(email);
 }