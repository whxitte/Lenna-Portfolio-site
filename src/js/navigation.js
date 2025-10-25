export function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-items');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navBar = document.querySelector('.nav-bar');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');

        if (navBar.classList.contains('active')) {
          navBar.classList.remove('active');
        }
      }
    });
  });

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navBar.classList.toggle('active');
    });
  }

  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= (sectionTop - 100)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-target') === current) {
        link.classList.add('active');
      }
    });
  });
}
