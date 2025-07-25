//Function to check if page is scrolled and adjust the logo size
const checkScroll = () => {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');

    let scrollPosition = window.scrollY;
    console.log(scrollPosition);

    //Add/remove 'scrolled class based on scroll position 
    if(scrollPosition>20) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
    }

    //Calculate new font size based on scroll position
    let newSize = 4.8 - (scrollPosition * 0.03); //Decrease by 0.03 for every pixel scrolled

    // Clamping the font size between 1.5rem and 3rem
    newSize = Math.max(2.4, newSize);
    newSize = Math.min(4.8, newSize)

    logo.style.fontSize = newSize + 'rem';

    
}

//Event Listener for scroll event
    window.addEventListener('scroll', checkScroll);