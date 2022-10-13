


// Menu Change Page

let allMenuButtons = document.querySelectorAll('.menu-button')
allMenuButtons.forEach(item => {
    item.addEventListener('click', changePage)
});

let allBanners = document.querySelectorAll(".featured-banner");
let allContainers = document.querySelectorAll(".featured-container");

function changePage() {

    let currentMenuButton = this.classList;
    for(let i = 0; i < allMenuButtons.length; i++) {
        if(allMenuButtons != this) {
            allMenuButtons[i].setAttribute("style","border-bottom: 0px");
        }
    }
    this.setAttribute("style", "border-bottom: 2px solid #cf2127");
     for(let i = 0; i < allBanners.length; i++) {
        if(allBanners[i].classList.contains(currentMenuButton[0])){
            allBanners[i].classList.remove("hidden");
            allContainers[i].classList.remove("hidden"); 
        } else {
             allBanners[i].classList.add("hidden");
             allContainers[i].classList.add("hidden"); 
        }
    }
}

//Home Carousel
let highlightsInfo = document.querySelector("#highlights-background-container").querySelectorAll(".highlights");
let highlightsImg = document.querySelector("#highlights-background-container").querySelectorAll(".highlights-img-container");

document.querySelector(".arrow-button-left").addEventListener("click", changeImageLeft);
document.querySelector(".arrow-button-right").addEventListener("click", changeImageRight);

function changeImageLeft() {
    getMainContainerHeight();
    removeCarouselCheckerColors(); 
    for(let i = highlightsInfo.length-1; i >= 0; i--) {
        if(highlightsInfo[i].classList.contains("hidden")!== true) {
            //hides current image on list
            highlightsInfo[i].classList.toggle("hidden");
            highlightsImg[i].classList.toggle("hidden");
            //if the first one in the list is showing, go back to end of the list
            if(i == 0) {
                highlightsInfo[highlightsInfo.length-1].classList.toggle("hidden");
                highlightsImg[highlightsImg.length-1].classList.toggle("hidden");
                changeCarouselCheckerColor(highlightsImg.length-1);
                break;
                 //if not, just  show next in list
            }  else {
                highlightsInfo[i-1].classList.toggle("hidden");
                highlightsImg[i-1].classList.toggle("hidden");
                changeCarouselCheckerColor(i-1);
                break;
            }
        }   
    }       
}
var mainContainer;
function getMainContainerHeight() {
    mainContainer = Number(document.querySelector("#highlights-background-container").clientHeight);
}
function changeImageRight() {
    getMainContainerHeight();
    removeCarouselCheckerColors();
    //itterating through all highlight containers to find which one is showing on screen
    for(let i = 0; i < highlightsInfo.length; i++) {
        if(highlightsInfo[i].classList.contains("hidden")!== true) {
            //hides current image on list
            highlightsInfo[i].classList.toggle("hidden");
            highlightsImg[i].classList.toggle("hidden");
            //if the last one in the list is showing, go back to beginning of the list
            if(i == highlightsInfo.length-1) {
                highlightsInfo[0].classList.toggle("hidden");
                highlightsImg[0].classList.toggle("hidden");
                changeCarouselCheckerColor(0);
                break;
                 //if not, just  show next in list
            }  else {
                highlightsInfo[i+1].classList.toggle("hidden");
                highlightsImg[i+1].classList.toggle("hidden");
                changeCarouselCheckerColor(i+1);
                break;
            }
        
        }   
    }       
}
// highlights div height
setAspectRatioOnResize();
window.addEventListener("resize", setAspectRatioOnResize);
document.querySelector(".arrow-button-left").addEventListener("click", setAspectRatioOnClick);
document.querySelector(".arrow-button-right").addEventListener("click", setAspectRatioOnClick);

var content;
var container;
function setAspectRatioOnResize(){
    for(let i = 0; i < highlightsInfo.length;i++) {
        if(!highlightsInfo[i].classList.contains("hidden")) {
            content = highlightsInfo[i];
            container = highlightsImg[i];
            container.style.height = "100%";
            content.style.height = container.offsetHeight + 'px';
            break;
        }
    }
    console.log(content.clientHeight)
    console.log(container.clientHeight)
}
//highlights div height on carousel click
function setAspectRatioOnClick(){
    for(let i = 0; i < highlightsInfo.length;i++) {
        if(!highlightsInfo[i].classList.contains("hidden")) {
            content = highlightsInfo[i];
            container = highlightsImg[i];
            content.style.height = Number(mainContainer) + "px";
            container.style.height = Number(mainContainer) + "px";
            break;
        }
    }
    console.log(mainContainer)
    console.log(content.style.height)
    console.log(container.style.height)
}

// changing carousel cirle colors
var carouselCheckerImages = document.querySelectorAll(".carousel-checker-img");

function removeCarouselCheckerColors() {
    for(let i = 0; i < carouselCheckerImages.length; i++) {
        carouselCheckerImages[i].classList.remove("filter-blue");
    }
}
function changeCarouselCheckerColor(number) {
    carouselCheckerImages[number].classList.add("filter-blue");
}

changeCarouselCheckerColor(0);