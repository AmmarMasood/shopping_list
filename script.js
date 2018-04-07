var button = document.querySelector("#enter");
var input = document.querySelector("#userinput");
var ul = document.querySelector("ul");
var btn = document.createElement("button");


ul.addEventListener("click", function(event){
	var li = document.querySelector("li");
	event.target.remove();
})

function createLi(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function checkInputValue(){
	return input.value.length;
}

function checkAndPost(){
	if(checkInputValue() > 0){
	   createLi();
    }else{
    	alert("Please enter any value");
    }
}	
function checkAndPost2(event){
    if(event.keyCode === 13 && checkInputValue() > 0){
       createLi();
    }else if(event.keyCode === 13){
    	alert("Please enter any value");
    }
}



button.addEventListener("click", checkAndPost);
input.addEventListener("keypress", checkAndPost2);