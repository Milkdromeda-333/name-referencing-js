let form = document.info //the form is named info so it can be referenced as an object to the document.

form.addEventListener("submit", function(event){
	event.preventDefault(); /stops the button from refreshing the page
    console.log(form.firstName.value + " " + form.lastName.value)
	form.firstName.value = "" 
	form.lastName.value = "" // these will reset the inputs.
})

/* SOOo forms can be "made part of the document" by giving it a name attribute and and it can be referenced using dot syntax(?). 
Also the elements inside can be named and referenced the same way.*/
