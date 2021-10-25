document.getElementById("menu-btn").addEventListener("click", function(){

	var menu = document.getElementById('menu');
	var navAnchor = document.querySelectorAll("nav a");
	var navSpan = document.querySelectorAll("nav a span");

	if (this.classList.contains("open")) {

		this.style.width = "40px";
		this.style.height = "40px";
		this.style.left = "110px";

		this.classList.remove("open");
		this.classList.add("close");

		menu.style.width = "130px";

		for (var i = 0; i < navAnchor.length; i++) {
			navAnchor[i].style.transform = "scale(0.9)";
		}

		for (var i = 0; i < navSpan.length; i++) {
			navSpan[i].style.visibility = "visible";
			navSpan[i].style.opacity = "1";
		}
	}
	else{

		this.style.width = "50px";
		this.style.height = "50px";
		this.style.left = "45px";

		this.classList.remove("close");
		this.classList.add("open");

		menu.style.width = "70px";

		for (var i = 0; i < navAnchor.length; i++) {
			navAnchor[i].style.transform = "scale(1)";
		}

		for (var i = 0; i < navSpan.length; i++) {
			navSpan[i].style.visibility = "hidden";
			navSpan[i].style.opacity = "0";
		}
	}
});

document.querySelector('.chat-btn').addEventListener("mouseenter", function() {

	var imgCircle = document.querySelector('.img-circle');
	imgCircle.classList.add("img-circle-hover");

});
document.querySelector('.chat-btn').addEventListener("mouseleave", function() {

	var imgCircle = document.querySelector('.img-circle');
	imgCircle.classList.remove("img-circle-hover");

});