// body
let bodyBackground = document.body.style;

// nav-bar
let homeNav = document.getElementById("nav1");
let destinationNav = document.getElementById("nav2");
let crewNav = document.getElementById("nav3");
let technologyNav = document.getElementById("nav4");

// destination page
let mars = document.getElementById("planet1");
let moon = document.getElementById("planet2");
let europa = document.getElementById("planet3");
let titan = document.getElementById("planet4");

// destination page contents
let marsContent = document.querySelectorAll(".mars");
let moonContent = document.querySelectorAll(".moon");
let europaContent = document.querySelectorAll(".europa");
let titanContent = document.querySelectorAll(".titan");

// Crew page
let crew1 = document.getElementById("slide1");
let crew2 = document.getElementById("slide2");
let crew3 = document.getElementById("slide3");
let crew4 = document.getElementById("slide4");

// crew page contents
let crew1Contents = document.querySelectorAll(".ansari");
let crew2Contents = document.querySelectorAll(".douglas");
let crew3Contents = document.querySelectorAll(".mark");
let crew4Contents = document.querySelectorAll(".victor");

// technology page
let technologyPage1 = document.getElementById("page1");
let technologyPage2 = document.getElementById("page2");
let technologyPage3 = document.getElementById("page3");

// technology page contents
let technologyPage1Contents = document.querySelectorAll(".vehicle");
let technologyPage2Contents = document.querySelectorAll(".spaceport");
let technologyPage3Contents = document.querySelectorAll(".space");

// first page view

let home = document.getElementById("home");
let destination = document.getElementById("destination");
let crew = document.getElementById("crew");
let technology = document.getElementById("technology");

let menuOpen =  document.getElementById('menu-open')
let menuClose = document.getElementById('menu-close')
let navBar = document.querySelector('nav')
let menuStatus = false
// let querry = window.matchMedia('(max:width: 420px)')

// if(!querry.matches){
//   menuOpen.style.display = 'none'
// }else if(querry.matches){
//   menuOpen.style.display = 'block'
// }

menuOpen.addEventListener('click', ()=>{
  if(menuStatus === false){
    navBar.style.cssText = 'visibility: visible; transform: translateX(0px); transition: 1s ease-in-out'
    menuStatus = true
  }else if(menuStatus===true){
    navBar.style.cssText = 'visibility: hidden; transform: translateX(325px); transition: 1s ease-in-out'
    menuStatus = false
  }
  
   
})

homeNav.addEventListener("click", () => {
  bodyBackground.cssText =
    "background-image: url(./home/background-home-desktop.jpg)";
  destinationNav.style.border = "none";
  technologyNav.style.border = "none";
  crewNav.style.border = "none";
  homeNav.style.cssText = " border-bottom: 5px solid white";
  home.style.display = "flex";
  destination.style.display = "none";
  crew.style.display = "none";
  technology.style.display = "none";
});

destinationNav.addEventListener("click", () => {
  bodyBackground.cssText =
    "background-image: url(./destination/background-destination-desktop.jpg)";
  homeNav.style.border = "none";
  destinationNav.style.cssText = " border-bottom: 5px solid white";
  crewNav.style.border = "none";
  technologyNav.style.border = "none";
  home.style.display = "none";
  crew.style.display = "none";
  technology.style.display = "none";
  destination.style.display = "flex";
});

crewNav.addEventListener("click", () => {
  bodyBackground.cssText =
    "background-image:url(./crew/background-crew-desktop.jpg)";
  homeNav.style.border = "none";
  destinationNav.style.border = "none";
  crewNav.style.cssText = " border-bottom: 5px solid white";
  technologyNav.style.border = "none";
  home.style.display = "none";
  destination.style.display = "none";
  technology.style.display = "none";
  crew.style.display = "flex";
});

technologyNav.addEventListener("click", () => {
  bodyBackground.cssText =
    "background-image: url(./technology/background-technology-desktop.jpg)";
  homeNav.style.border = "none";
  destinationNav.style.border = "none";
  crewNav.style.border = "none";
  technologyNav.style.cssText = " border-bottom: 5px solid white";
  home.style.display = "none";
  destination.style.display = "none";
  crew.style.display = "none";
  technology.style.display = "flex";
});

// destination page
moon.addEventListener("click", () => {
  for (let i = 0; i < marsContent.length; i++) {
    marsContent[i].style.display = "none";
  }
  for (let i = 0; i < moonContent.length; i++) {
    moonContent[i].style.display = "block";
  }
  for (let i = 0; i < europaContent.length; i++) {
    europaContent[i].style.display = "none";
  }
  for (let i = 0; i < titanContent.length; i++) {
    titanContent[i].style.display = "none";
  }
  moon.style.cssText = "border-bottom: 5px solid white; padding-bottom: 8px;";
  mars.style.border = "none";
  europa.style.border = "none";
  titan.style.border = "none";
});
mars.addEventListener("click", () => {
  for (let i = 0; i < marsContent.length; i++) {
    marsContent[i].style.display = "block";
  }
  for (let i = 0; i < moonContent.length; i++) {
    moonContent[i].style.display = "none";
  }
  for (let i = 0; i < europaContent.length; i++) {
    europaContent[i].style.display = "none";
  }
  for (let i = 0; i < titanContent.length; i++) {
    titanContent[i].style.display = "none";
  }
  moon.style.border = "none";
  mars.style.cssText = "border-bottom: 5px solid white; padding-bottom: 8px;";
  europa.style.border = "none";
  titan.style.border = "none";
});
europa.addEventListener("click", () => {
  for (let i = 0; i < marsContent.length; i++) {
    marsContent[i].style.display = "none";
  }
  for (let i = 0; i < moonContent.length; i++) {
    moonContent[i].style.display = "none";
  }
  for (let i = 0; i < europaContent.length; i++) {
    europaContent[i].style.display = "block";
  }
  for (let i = 0; i < titanContent.length; i++) {
    titanContent[i].style.display = "none";
  }
  moon.style.border = "none";
  mars.style.border = "none";
  europa.style.cssText = "border-bottom: 5px solid white; padding-bottom: 8px;";
  titan.style.border = "none";
});
titan.addEventListener("click", () => {
  for (let i = 0; i < marsContent.length; i++) {
    marsContent[i].style.display = "none";
  }
  for (let i = 0; i < moonContent.length; i++) {
    moonContent[i].style.display = "none";
  }
  for (let i = 0; i < europaContent.length; i++) {
    europaContent[i].style.display = "none";
  }
  for (let i = 0; i < titanContent.length; i++) {
    titanContent[i].style.display = "block";
  }
  moon.style.border = "none";
  mars.style.border = "none";
  europa.style.border = "none";
  titan.style.cssText = "border-bottom: 5px solid white; padding-bottom: 8px;";
});

// crew page
crew1.addEventListener("click", () => {
  for (let i = 0; i < crew2Contents.length; i++) {
    crew2Contents[i].style.cssText = "display: none;";
  }
  for (let i = 0; i < crew1Contents.length; i++) {
    crew1Contents[i].style.cssText = "display: block;";
  }
  for (let i = 0; i < crew3Contents.length; i++) {
    crew3Contents[i].style.cssText = "display: none;";
  }
  for (let i = 0; i < crew4Contents.length; i++) {
    crew4Contents[i].style.cssText = "display: none;";
  }
});

crew2.addEventListener("click", () => {
  for (let i = 0; i < crew2Contents.length; i++) {
    crew2Contents[i].style.cssText = "display: block;";
  }
  for (let i = 0; i < crew1Contents.length; i++) {
    crew1Contents[i].style.cssText = "display: none;";
  }
  for (let i = 0; i < crew3Contents.length; i++) {
    crew3Contents[i].style.cssText = "display: none;";
  }
  for (let i = 0; i < crew4Contents.length; i++) {
    crew4Contents[i].style.cssText = "display: none;";
  }
});

crew3.addEventListener("click", () => {
  for (let i = 0; i < crew2Contents.length; i++) {
    crew2Contents[i].style.cssText = "display: none;";
  }
  for (let i = 0; i < crew1Contents.length; i++) {
    crew1Contents[i].style.cssText = "display: none;";
  }
  for (let i = 0; i < crew3Contents.length; i++) {
    crew3Contents[i].style.cssText = "display: block;";
  }
  for (let i = 0; i < crew4Contents.length; i++) {
    crew4Contents[i].style.cssText = "display: none;";
  }
});

crew4.addEventListener("click", () => {
  for (let i = 0; i < crew2Contents.length; i++) {
    crew2Contents[i].style.cssText = "display: none;";
  }
  for (let i = 0; i < crew1Contents.length; i++) {
    crew1Contents[i].style.cssText = "display: none;";
  }
  for (let i = 0; i < crew3Contents.length; i++) {
    crew3Contents[i].style.cssText = "display: none;";
  }
  for (let i = 0; i < crew4Contents.length; i++) {
    crew4Contents[i].style.cssText = "display: block;";
  }
});

// Technology page
technologyPage1.addEventListener("click", () => {
  for (let i = 0; i < technologyPage2Contents.length; i++) {
    technologyPage2Contents[i].style.cssText = "display:none;";
  }
  for (let i = 0; i < technologyPage3Contents.length; i++) {
    technologyPage3Contents[i].style.cssText = "display:none;";
  }
  for (let i = 0; i < technologyPage1Contents.length; i++) {
    technologyPage1Contents[i].style.cssText = "display:block;";
  }
});

technologyPage2.addEventListener("click", () => {
  for (let i = 0; i < technologyPage2Contents.length; i++) {
    technologyPage2Contents[i].style.cssText = "display:block;";
  }
  for (let i = 0; i < technologyPage3Contents.length; i++) {
    technologyPage3Contents[i].style.cssText = "display:none;";
  }
  for (let i = 0; i < technologyPage1Contents.length; i++) {
    technologyPage1Contents[i].style.cssText = "display:none;";
  }
});

technologyPage3.addEventListener("click", () => {
  for (let i = 0; i < technologyPage2Contents.length; i++) {
    technologyPage2Contents[i].style.cssText = "display:none;";
  }
  for (let i = 0; i < technologyPage3Contents.length; i++) {
    technologyPage3Contents[i].style.cssText = "display:block;";
  }
  for (let i = 0; i < technologyPage1Contents.length; i++) {
    technologyPage1Contents[i].style.cssText = "display:none;";
  }
});
