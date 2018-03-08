function toggleMenu(){
    var element = document.querySelector(".menu");
    element.classList.toggle("show")

    element = document.querySelector(".menu-container");
    element.classList.toggle("hide")

    element = document.querySelector(".close")
    element.classList.toggle("show")
}