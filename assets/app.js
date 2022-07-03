// ==========PORTFOLIO=================
let buttons = document.querySelectorAll(".portfolio-nav-link button");
let items = document.querySelectorAll(".portfolio-item");
let itemsNames = document.querySelectorAll(".portfolio-subtitle");

function foo(name, num){
    for(let i = 0; i < buttons.length; i++){
        if(buttons[i].classList.contains('active')){
            buttons[i].classList.remove('active');
        }
    }
    buttons[num].classList.add('active');
    name = name.toUpperCase(name);
    if(name == 'ALL'){
        for(let i = 0; i < items.length; i++){
            if(items[i].classList.contains('hidden')){
                items[i].classList.remove('hidden');
                items[i].classList.add('itemShow');
                items[i].onanimationend = () => {
                    items[i].classList.remove('hidden');
                    items[i].classList.remove('itemShow');
                }
            } 
        }
        return;
    }

    for(let i = 0; i < items.length; i++){
        if(!((itemsNames[i].textContent).trim() == name)){
            if(!(items[i].classList.contains('hidden'))){
                items[i].classList.add('itemHidden');
                items[i].onanimationend = () => {
                    items[i].classList.remove('itemHidden');
                    items[i].classList.add('hidden');
                    items[i].classList.remove('itemShow');
                }
            }
        }
    }

    for(let i = 0; i < items.length; i++){
        if((itemsNames[i].textContent).trim() == name){
            if(items[i].classList.contains('hidden')){
                items[i].classList.remove('hidden');
                items[i].classList.add('itemShow');
                items[i].onanimationend = () => {
                    items[i].classList.remove('hidden');
                    items[i].classList.remove('itemShow');
                }
            }
        }
    }
}

// ==========FIXED_HEADER==================

const header = document.getElementById('header');
const intro = document.getElementById('intro');
const portfolio = document.getElementById('portfolio');
const resume = document.getElementById('resume');
const about = document.getElementById('about');

const introLink = document.getElementById('intro-link');
const portfolioLink = document.getElementById('portfolio-link');
const resumeLink = document.getElementById('resume-link');
const aboutLink = document.getElementById('about-link');

let introTop = intro.scrollWidth - (intro.scrollWidth * 0.85);
let introBottom = intro.scrollWidth - (intro.scrollWidth * 0.3);
let portfolioBottom = portfolio.scrollWidth + introBottom;
let resumeBottom = resume.scrollWidth + portfolioBottom;
let aboutBottom = about.scrollWidth + resumeBottom;

if(+(window.pageYOffset) >= 190){
    header.classList.add('fixed');
}

document.addEventListener('scroll', () => {
    if(window.pageYOffset >= introTop){
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }

    if(window.pageYOffset >= introTop && window.pageYOffset <= introBottom){
        introLink.classList.add('active');
    } else {
        introLink.classList.remove('active');
    }
    if(window.pageYOffset > introBottom && window.pageYOffset <= portfolioBottom){
        portfolioLink.classList.add('active');
    } else {
        portfolioLink.classList.remove('active');
    }
    if(window.pageYOffset > portfolioBottom && window.pageYOffset <= resumeBottom){
        resumeLink.classList.add('active');
    } else {
        resumeLink.classList.remove('active');
    }
    if(window.pageYOffset > resumeBottom && window.pageYOffset <= aboutBottom){
        aboutLink.classList.add('active');
    } else {
        aboutLink.classList.remove('active');
    }
})

console.log(portfolioBottom);
