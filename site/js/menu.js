function toggleMenu(){
    var element = document.querySelector(".menu");
    element.classList.toggle("show")

    element = document.querySelector(".menu-container");
    element.classList.toggle("hide")

    /*element = document.querySelector("main");
    element.classList.toggle("fade")*/

    /*
	Detta skall inte vara med för att menu-container skall vara kvar
	vid knapptryckning.
    element = document.querySelector(".menu-container");
    element.classList.toggle("hide")*/

}