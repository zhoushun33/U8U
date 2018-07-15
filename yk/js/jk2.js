 
function myFunction() {      
	if(document.getElementById("checkbox1").checked == true) {         
		alert("sddddddddddddddd");      
	}   
}
var imag0 = document.getElementById("imag0");
imag0.onmouseover = function() {
	imag1.style.display = "block";
}
imag0.onmouseout = function() {
	imag1.style.display = "none";
}

var wenz = document.getElementById("wenspan");
var wzi = wenz.getElementsByTagName("a");
wenz.onmouseover = function() {
	for(var i = 0; i < wzi.length; i++) {
		wzi[i].style.color = "orange";
	}
}
wenz.onmouseout = function() {
	for(var i = 0; i < wzi.length; i++) {
		wzi[i].style.color = "black";
	}
}

var jia = document.getElementById("plus");
var jian = document.getElementById("min");
var shuz = document.getElementById("shuz");
var jiagd=document.getElementById("jiagd");
var  su=document.getElementById("su");
jia.onclick = function() {
	var x = shuz.innerHTML;
	var y=jiagd.innerHTML;
	x++;
	y=108*x;
	shuz.innerHTML = x;
	jiagd.innerHTML="￥"+y+".00";
	su.innerHTML=y+".00";
}
jian.onclick = function() {
	var x = shuz.innerHTML;
	var y=jiagd.innerHTML;
		x--;
		shuz.innerHTML = x;
		if(x==0)
		{
			shuz.innerHTML = x+1;
		}
		y=108*x;
		jiagd.innerHTML="￥"+y+".00";
		su.innerHTML=y+".00";
}

var butt = document.getElementById("butt");
butt.onclick = function() {
	window.open("yk4.html", "_self");
}

var u8 = document.getElementById("u8");
u8.onclick = function() {
	window.open("yk1.html", "_self");
}

