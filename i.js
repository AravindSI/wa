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
}
	//localStorage.setItem(obj.email,JSON.stringify(obj));
	//showExpensesOnScreen(obj);
	window.addEventListener("DOMContentLoaded",()=>{
		axios.get("https://crudcrud.com/api/94cc02e44d194b299d383816afce8752/crudPractice")
		.then((response)=>{
			console.log(response)
			for(var i=0;i<response.data.length;i++){
				showNewUserOnScreen(response.data[i]);
			}
		})
		.catch((error)=>{
			console.log(error)
		})
	})

function showNewUserOnScreen(user){
     

	//document.getElementById("name").value = "";
	//document.getElementById("email").value ="";
	//if(localStorage.getItem(user.email) !==null){
		//removeUserFromScreen(user.email)
	//}
	const parentNode=document.getElementById("listOfusers");
	const childHTML = `<li id=${user._id}>${user.name}- ${user.email}
                                        <button onclick=deleteUser('${user._id}')> Delete User </button>
										<button onclick=editUserDetails('${user.name}','${user._id}')>Edit User </button></li>`;
	parentNode.innerHTML=parentNode.innerHTML+childHTML;
}
function editUserDetails(name,email){

	document.getElementById("name").value = name;
	document.getElementById("email").value =email;
	deleteUser(email);
 }

function deleteUser(userId){
	axios.delete(`https://crudcrud.com/api/94cc02e44d194b299d383816afce8752/crudPractice/${userId}`)
	.then(()=>{
		removeUserFromScreen(userId);
	})
	.catch((err)=>{
		console.log(err)
	})
	//console.log()
	//localStorage.removeItem(emailId);
	//removeUserFromScreen(emailId);
}
function removeUserFromScreen(userId){
	const parentNode = document.getElementById('listOfusers');
	const childNodeToBeDeleted = document.getElementById(userId);
     if(childNodeToBeDeleted){
		parentNode.removeChild(childNodeToBeDeleted);
	 }
	
}
