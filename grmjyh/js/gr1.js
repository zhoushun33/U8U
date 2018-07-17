window.onload = function() {
	var boxsize = document.getElementById("photo");

	var imgs = boxsize.getElementsByTagName("img");

	var imgwidth = imgs[0].offsetWidth;

	var exposeWidth = 170;

	var boxwidth = imgwidth + (imgs.length - 1) * exposeWidth;
	boxsize.style.width = boxwidth + "px";

	function init() {
		for(var i = 1; i < imgs.length; i++) {
			imgs[i].style.left = imgwidth + (i - 1) * exposeWidth + 'px';
		}
	}
	init();
	var yingdong = imgwidth - exposeWidth;
	for(i = 0; i < imgs.length; i++) {
		(function(i) {
			imgs[i].onmouseover = function() {
				//先将每道门复位
				init()
				//打开门
				for(var j = 1; j <= i; j++) {
					imgs[j].style.left = parseInt(imgs[j].style.left, 10) - yingdong + 'px';
				}
			};
		})(i);
	}
	var Lis = document.getElementsByTagName("li");
	for(i = 0; i < Lis.length; i++) {
		Lis[i].onmouseover = function() {
			this.className = "lihover";
		}

		Lis[i].onmouseout = function() {
			this.className = "";
		}
	}
}
    var img3 = document.getElementById("img3");
    img3.onclick = function() {
    	window.open("gr3.html","_self");
 }
    var gouw=document.getElementById("gouw");
    gouw.onclick = function() {
    	window.open("gr2.html","_self");
 }