 function myFunction() {
        if( document.getElementById("checkbox1").checked==true ) {
            alert("sddddddddddddddd");
        }
    }
    var imag0=document.getElementById("imag0");
    imag0.onmouseover=function (){
    	imag1.style.display="block";
    }
    imag0.onmouseout=function (){
    	imag1.style.display="none";
    }
    
    var wenz=document.getElementById("wenspan");
    var wzi=wenz.getElementsByTagName("a");
    wenz.onmouseover=function(){
    	for(var i=0; i<wzi.length;i++)
    	{
    		wzi[i].style.color="orange";
    	}
    }
    wenz.onmouseout=function(){
    	for(var i=0; i<wzi.length;i++)
    	{
    		wzi[i].style.color="black";
    	}
    }
    var u8=document.getElementById("u8");
    u8.onclick=function (){
    	window.open("py1.html","_self");
    }
    var fan=document.getElementById("fan");
    fan.onclick=function (){
    	window.open("py1.html","_self");
    }






















