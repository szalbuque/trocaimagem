let currentImageIndex = 0,
	images = document.querySelectorAll("#area-img img"),
	max = images.length;

function nextImage(){
	currentImageIndex++;
	images[currentImageIndex]
	.classList.add("selected");

}

function trocar(){
	alert(currentImageIndex);
	nextImage();
}