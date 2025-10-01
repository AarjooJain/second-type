/* eslint-env browser */

// Toggle Mobile Menu
document.getElementById('hamburger').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
  });
  
  // Animate on scroll (with fallback)
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
  
    document.querySelectorAll('.animate').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.animate').forEach(el => el.classList.add('show'));
  }
  
  // 🌟 Auto-highlight Active Navbar Link
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('nav ul li a').forEach(link => {
    if (
      link.getAttribute('href') === currentPage ||
      (currentPage === '' && link.getAttribute('href') === 'index.html')
    ) {
      link.classList.add('active');
    }
  });
  
  