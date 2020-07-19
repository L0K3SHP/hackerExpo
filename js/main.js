const responsive = () => {
    const mainNav = document.querySelector('.navbar')
    const navBarToggle = document.querySelector('.navbar-toggle');
    const introSec = document.querySelector('.intro');

    navBarToggle.addEventListener('click', () =>{
        mainNav.classList.toggle('active');
        introSec.classList.toggle('intro1');
    });


}
responsive();