 const hamburgerBtn = document.getElementById('hamburgerBtn');
 const navbarLeft = document.getElementById('navbarLeft');
 hamburgerBtn.addEventListener('click', () => {
     navbarLeft.classList.toggle('show');
 });