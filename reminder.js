function init(){

	// window.open(<String url> [, <String window_name>[, <String windowFeatures>]])
	var h1tags = document.getElementsByTagName("h1");
	h1tags[0].onclick = changeColor;

	var button = document.getElementById("button1");
	button = changeColor;

}

function changeColor(){
	this.innerHTML = "Cmooooon";
	var randomcolor = '#' +Math.floor(Math.random()*16777215).toString(16);
	this.style.color= randomcolor;
}

onload = init;