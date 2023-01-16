 
 function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }
 
 
 var foxImage = document.querySelector('img');
 
 
 foxImage.onclick = sayOuch;

 var hidebutton = document.querySelector("#Hide");

 hidebutton.onclick = hidefox;


function hidefox(){
	document.getElementById('foxImage').style.display = "none";
}


var showbutton = document.querySelector("#Show");

showbutton.onclick = showfox;

function showfox(){
	console.log("show button clicked");
	document.getElementById('foxImage').style.display = "";
}





