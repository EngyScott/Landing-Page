/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**************** DECLARE VARIABLES ******************/
const sections = document.querySelectorAll('section');
const navUL = document.querySelector('#navbar__list');
const navBar = document.getElementsByClassName('navbar__menu');
const pageHeader = document.querySelector('header.page__header');
const parentDivs = document.querySelectorAll('.landing__container');
/**
 * End Global Variables
 * START FUNCTIONS
*/
/*********** NAVBAR SECTION ************************/
/*** CREAT THE NAVBAR ***/
const buildNavbar = function(section, a){
    // LOOP OVER THE SECTIONS
    for(let section of sections){
        const li = document.createElement('li');// CREATE LIs
        const a = document.createElement('a');// CREATE LINKS
        a.innerText = section.dataset.nav;// ASSIGN LINKS DISPLAY TEXT
        a.href = `#${section.id}`;// ASSIGN HREF
        a.classList.add('menu__link');// STYLE THE NAV ITEMS
        li.appendChild(a);// APPEND LINKS TO LIs
        navUL.appendChild(li);// APPEND LIs TO THE UL
    }
}
/*** END OF NAVBAR CREATION***/
/*** NAVBAR EFFECTS***/
/* Hide when not active window */
const hideNavbar = function(){
    const intervalId = setInterval(() => {
        if(!window.onscroll()){
            pageHeader.style.display = 'none';
        }
    }, 10000);
}
/* Active tab when section on screen */
const tabActive = function(){
    const links = document.querySelectorAll('li > a');
    for(let a of links){
        if(window.location.hash == a.hash){
            a.classList.add('active')
        }else{
            a.classList.remove('active')
        }
    }
}
/*** END OF NAVBAR EFFECTS***/
// 
// 
/************************ SECTIONS EFFECTS **************/
// ADD ACTIVE CLASS TO ACTIVE SECTIONS
const sectionActive = function(){
    for(let section of sections){
        const secTop = section.getBoundingClientRect().top;//Get the top aligment for a section
        const windowHeight = window.innerHeight;//check screen height
        if(secTop >= 0 && secTop <= windowHeight-200){//if section top aligment is within the screen
            const location = window.location.toString().split('#')[0];//change the window hash to match the shown section hash
            history.replaceState(null, '', location + `#${section.id}`);
            if(!section.classList.contains('your-active-class')){//add active effect to the active section
                section.classList.add('your-active-class');
            }
        } else{
            if(section.classList.contains('your-active-class')){//remove acive class from the inactive section
                section.classList.remove('your-active-class')
            }
        }
    }
}
/*** Create read more btn ***/
// const readBtnFunc = function(){
    
// }
// create btn
const displayBtn = function(parent){
    for(let i = 0; i < parentDivs.length; i++){
        createBtn(parentDivs[i]);
    }
}
const hideP = function() {
    for(let i = 0; i < readBtns.length; i++){
        console.log(readBtns[i].previousElementSibling)
        readBtns[i].previousElementSibling.classList.add('hide')
    }
};
const createBtn = function (parent) {
    const readMe = document.createElement('button');
    readMe.innerText = "Read More";
    readMe.classList.add('readBtn');
    parent.appendChild(readMe);
}
// add event listener
const readMore = function(){
    for(let readBtn of readBtns){
        readBtn.addEventListener('click', clickToggle);
    }
}
const clickToggle = function(event){
    let prevSibling = event.target.previousElementSibling;
    if(prevSibling.classList.contains('hide')){
        prevSibling.classList.remove('hide');
        event.target.innerText = 'Read Less'
    }else{
        prevSibling.classList.add('hide');
        event.target.innerText = 'Read More'
    } 
}

/**************    SCROLL TO TOP BUTTON & NAVBAR HIDDEN  ****************/
//Define the button
const scrlBtn = document.getElementById("scrlBtn");
// Button Display
const showBtn = function(){
    // Show button if ducoment is not on top
    if(!document.documentElement.scrollTop == 0){
        scrlBtn.style.display = "block"
    // Otherwise hide it
    }else{
        scrlBtn.style.display = "none"
    }
}
// 
//Listen to a button click event and move up
scrlBtn.addEventListener('click', function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
// 
/**
 * End Helper Functions
 * Begin Events
 * 
*/
// 
window.onload = function(){
// build the nav
    buildNavbar();
    // readBtnFunc();
}
// Listen for scroll event
window.onscroll = function(){
    showBtn();
// Add class 'active' to section when near top of viewport
    sectionActive();
    tabActive();
    // hideNavbar();
}
displayBtn();
const readBtns = document.querySelectorAll('.readBtn');
hideP();
readMore();


// Scroll to anchor ID using scrollTO event




// Build menu 

// Scroll to section on link click

// Set sections as active
