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
/**
 * End Global Variables
 * START FUNCTIONS
*/
/*********** NAVBAR SECTION ************************/
/*** CREAT THE NAVBAR ***/
const buildNavbar = function(section, a){
    // LOOP OVER THE SECTIONS
    for(let section of sections){
        // CREATE LIs
        const li = document.createElement('li');
        // CREATE LINKS
        const a = document.createElement('a');
        // ASSIGN LINKS DISPLAY TEXT
        a.innerText = section.dataset.nav;
        // ASSIGN HREF
        a.href = `#${section.id}`;
        // STYLE THE NAV ITEMS
        a.classList.add('menu__link');
        // APPEND LINKS TO LIs
        li.appendChild(a);
        // APPEND LIs TO THE UL
        navUL.appendChild(li);
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

/* Active tab when sectionon screen */
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
        const secTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(secTop >= 0 && secTop <= windowHeight){
            const location = window.location.toString().split('#')[0];
            history.replaceState(null, '', location + `#${section.id}`);
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }
        } else{
            if(section.classList.contains('your-active-class')){
                section.classList.remove('your-active-class')
            }
        }
        
    }
}
/**************    SCROLL TO TOP BUTTON & NAVBAR HIDDEN  ****************/
//Define the button
const scrlBtn = document.getElementById("scrlBtn");
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
})
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
    
}
// Listen for scroll event
window.onscroll = function(){
    showBtn();
// Add class 'active' to section when near top of viewport
    sectionActive();
    tabActive();
    // hideNavbar();
}



// Scroll to anchor ID using scrollTO event




// Build menu 

// Scroll to section on link click

// Set sections as active
