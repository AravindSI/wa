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

		//const localStorageObj=localStorage;
		//const localStorageKeys=Object.keys(localStorageObj)
        //for(var i=0;i<localStorageKeys.length;i++){
			//const key=localStorage[i];
			//const userDetailsString=localStorageObj[key];
			//const userDetailsObj=JSON.parse(userDetailsString);
			//showNewUserOnScreen(userDetailsObj);
		//}
	})

function showNewUserOnScreen(user){
	const parentNode=document.getElementById("listOfusers");
	const childHTML = `<li id=${user.email}>${user.name}- ${user.email}
                                        <button onclick=deleteUser('${user.email}')> Delete User </button>
										<button onclick=editUserDetails('${user.name}','${user.email}')>Edit User </button></li>`;
	parentNode.innerHTML=parentNode.innerHTML+childHTML;
}
function editUserDetails(name,email){

	document.getElementById("name").value = name;
	document.getElementById("email").value =email;
	deleteUser(email);
 }

function deleteUser(emailId){
	console.log(emailId)
	//localStorage.removeItem(emailId);
	removeUserFromScreen(emailId);
}
function removeUserFromScreen(emailId){
	const parentNode = document.getElementById('listOfusers');
	const childNodeToBeDeleted = document.getElementById(emailId);

	parentNode.removeChild(childNodeToBeDeleted);
}
