const responsive = () => {
    const mainNav = document.querySelector('.navbar')
    const navBarToggle = document.querySelector('.navbar-toggle');

    navBarToggle.addEventListener('click', () =>{
        mainNav.classList.toggle('active')
    });


}
responsive();