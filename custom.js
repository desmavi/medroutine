const menuHamburger = document.querySelector("#menu");
const menuIcon = document.querySelector("#menu-icon");
const menuItems = document.querySelector(".menu-items");
const menuLink = document.querySelectorAll(".menu-items ul li a");
const body = document.querySelector("body");
const overlayMenu = document.createElement("div");

function closeMenu () {
    menuItems.classList.remove("menu-active");
    overlayMenu.classList.remove("menu-open");
    menuIcon.src = "images/menu.png";
    menuIcon.alt = "menu";
    menuIcon.style.position = "static"
}

//open and close mobile menu
menuHamburger.addEventListener("click", function() {
    menuItems.classList.toggle("menu-active");
    overlayMenu.classList.toggle("menu-open")
    document.body.appendChild(overlayMenu);

    if(menuIcon.src.match("images/menu.png")) {
        menuIcon.src= "images/close.png";
        menuIcon.alt = "chiudi menu";
        menuIcon.style.position = "fixed";
        menuIcon.style.top = "20px";
        menuIcon.style.right = "15px";
    }
    else {
        menuIcon.src = "images/menu.png";
        menuIcon.alt = "menu";
        menuIcon.style.position = "static"
    }

})

//close overlay
overlayMenu.addEventListener("click", function() {
    closeMenu();
})

//close mobile menu when a link is clicked
menuLink.forEach(menu => 
    menu.addEventListener("click", function(){
    if(menuItems.classList.contains("menu-active")){
    closeMenu();
    }
})
)





