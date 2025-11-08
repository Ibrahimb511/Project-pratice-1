const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // empêche le scroll automatique

    const targetId = link.getAttribute('href').substring(1); // retire le #
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Initialisation
document.querySelector('nav a').classList.add('active'); // home actif par défaut
