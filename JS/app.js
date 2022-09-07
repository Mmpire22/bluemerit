// toggle the hamburger menu icon
let menuIcon = document.querySelector('.hamicon')
let hamIcon = document.querySelector('.fa-bars')
let xIcon = document.querySelector('.fa-x')
menuIcon.addEventListener('click', ()=>{
hamIcon.classList.toggle('fa-x')
})

// toggle menu items visibility
let navLinks = document.querySelector('.nav-links')
// console.log(navLinks.lastElementChild)
navItems = navLinks.lastElementChild
hamIcon.addEventListener('click', ()=>{
    navItems.classList.toggle('show')
})

// toggle services icon
chevDown = document.getElementsByTagName('i')[4]
let servIce = document.querySelector('.servv')
servIce.addEventListener('click', ()=>{
    chevDown.classList.toggle('fa-angle-up')
})
unList = document.getElementsByTagName('ul')[1]
    servIce.addEventListener('click', ()=>{
        if(unList.style.display == "block"){
            unList.style.display = "none"
        }
        else unList.style.display = "block"
    }
)


// toggle study info

let closeInfo = document.querySelectorAll('.drop')
let openInfo = document.querySelector('.tab')
 for (let i=0; i<closeInfo.length; i++){
    let closeInfos = closeInfo[i];
    closeInfos.addEventListener('click', openItem)

    function openItem(){
        closeInfos.previousElementSibling.classList.toggle('close');
        // closeInfos.classList.toggle('close')
    }
 }
//  js for preloader
 let preLoader = document.querySelector('.preloader')
 window.addEventListener('load', ()=>{
    preLoader.classList.add('hidden')
 })

// banner image slider
 let imageSlider = document.querySelector('.slider')
 let images = new Array (
    "Images/banner-1.jpg",
    "Images/banner-2.jpg",
    "Images/banner-3.jpg",
    "Images/banner-4.jpg",
    "Images/banner-5.jpg"

 );
 let len = images.length;
 let i=0;
 function slide(){
    if(i > len -1){
        i = 0
    }
    imageSlider.src = images[i];
    i++;
    setTimeout('slide()', 3000);
 }