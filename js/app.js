// DECLARE VARIABLES
const sections = document.querySelectorAll('section');
const navUL = document.querySelector('#navbar__list');
const navBar = document.getElementsByClassName('page__header');

const addActive = function(){
    for(let section of sections){
        const secTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(secTop >= 0 && secTop <= windowHeight){
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



/*********** NAVBAR SECTION ************************/

/**** CREAT THE NAVBAR  ******/
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
        // if(section.scrollIntoView(true)){
        //     section.classList.add('your-active-class');
        // }else{
        //     section.classList.remove('your-active-class');
        // }
        // a.addEventListener('click', linkActive(event));
        
    }
}

buildNavbar()
    
// let scrolling = false;
// window.scroll = () => {
//     scrolling = true;
//     if (scrolling) {
//         navBar.style.display = 'block'
//     }else{
//         setTimeout(() => {
//             navBar.style.display = 'none'
//         },50);
//     }
// };

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
// Listen for scroll event
window.onscroll = function(){
    showBtn();
    addActive()
}
//Listen to a button click event and move up
scrlBtn.addEventListener('click', function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})




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

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
