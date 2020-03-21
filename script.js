//menu
  var menuLinks = document.querySelectorAll(".menu__list a");
  var linkActive = document.querySelectorAll(".menu__list .active");
  for(var i = 0; i < menuLinks.length; i++) {
    var elem = menuLinks[i];
    elem.addEventListener("click", function(){
        var linkActive = document.querySelectorAll(".menu__list .active");
        for(var i = 0; i < linkActive.length; i++) {
            var item = linkActive[i];
             item.classList.remove("active");
        }
        this.classList.add("active");
    })
  }

//slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
 showSlides(slideIndex += n);
}

function currentSlide(n) {
 showSlides(slideIndex = n);
}

function showSlides(n) {
 var slides = document.getElementsByClassName("slide");
 if (n > slides.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slides.length}
 for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
 }
 slides[slideIndex-1].style.display = "flex";
}

//portfolio
  var images = document.querySelectorAll(".portfolio img");
  var imgActive = document.querySelectorAll(".portfolio .active");
  console.log(imgActive);
  for(var i = 0; i < images.length; i++) {
    var elem = images[i];
    console.log(elem);
    elem.addEventListener("click", function(){
        //document.getElementsByClassName(".active").classList.remove(".active");
        var imgActive = document.querySelectorAll(".portfolio .active");
        for(var i = 0; i < imgActive.length; i++) {
            var item = imgActive[i];
             item.classList.remove("active");
        }
        this.classList.add("active");
    })
  }

 console.log(images);
 function shuffle(arr){
	var j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}
shuffle(images);
console.log(images);
// function menuRight() {
//     let x = document.getElementById('menuBtn');
//     if (x.className === "menu__btn"){
//         x.className === "menu__btn-open";
//     }else{
//         x.className === "menu__btn";
//     }
// }
//
//     window.onload = function () {
//         var menuStyle = getComputedStyle(menu);
//         menuBtn.onclick = function () {
//             if (menuStyle.right == '-40%') {
//                 menu.classList.add('menu-open');
//                 this.classList.add('menu__btn-open');
//             }else {
//                 menu.classList.remove('menu-open');
//                 this.classList.remove('menu__btn-open');
//             }
//         }
// }
