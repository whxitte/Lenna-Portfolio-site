import { initializeNavigation } from './navigation.js';
import { initializeSkills } from './skills.js';
import { initializeContact } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  initializeSkills();
  initializeContact();

  const ctaButtons = document.querySelectorAll('.hire-me-btn');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const contactSection = document.getElementById('contacts');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const downloadCvBtn = document.querySelector('.download-cv-btn');
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', () => {
      alert('CV download functionality can be added here with your actual CV file.');
    });
  }
});
