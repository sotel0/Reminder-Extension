var imageList = new Array();
var h1tags = document.getElementsByTagName("h1");
var button = document.getElementById("but1");

onload = init;

function init(){
	
	button.onclick = changeState;
	//button.onclick = changeColor(String1);
	//button.innerHTML = "off";
	
	fillImgList(imageList);
	displayImg();

	h1tags[0].onmouseover = changeColor;
}



function changeState(){
if(this.innerHTML == "Start"){
	document.write("yes")
} else{
	document.write("fail")
}

}

function changeColor(){
	var randomcolor = '#' +Math.floor(Math.random()*16777215).toString(16);
	this.style.color = randomcolor;
}

function fillImgList(list){
list[0] = 'imgs/bear1.gif';
list[1] = 'imgs/dog1.gif';
list[2] = 'imgs/dog2.gif';
list[3] = 'imgs/peng1.gif';
list[4] = 'imgs/rat1.gif';
list[5] = 'imgs/dog3.gif';
list[6] = 'imgs/dog4.gif';
}

function displayImg(){
	let index = Math.round(Math.random()*(imageList.length-1));

	document.getElementById("pic").src = imageList[index];
}
