window.onload = function(){
	var quickAddBtn = document.getElementById("QuickAdd");
	var AddBtn = document.getElementById("Add");
	var cancelBtn = document.getElementById("Cancel");
	var quickAddFormDiv = document.querySelector(".quickaddForm");
	//document.getElementByClassName('quickaddForm')[0]

	var fullname = document.getElementById("fullname");
	var phone = document.getElementById("phone");
	var address = document.getElementById("address");
	var city = document.getElementById("city");
	var email = document.getElementById("email");

	//Desplegar el address book
	var addBookDiv = document.querySelector(".addbook");

	//Array de almacenamiento
	var addressBook = [];

	quickAddBtn.addEventListener("click", function(){
		quickAddFormDiv.style.display = "block";
		addBookDiv.style.display = "block";
	});

	cancelBtn.addEventListener("click", function(){
		quickAddFormDiv.style.display = "none";
		addBookDiv.style.display = "none";
	});

}