// ===== Scroll Animation (Intersection Observer) =====
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
      threshold: 0.1
    };
  
    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(revealCallback, observerOptions);
  
    document.querySelectorAll('.preview-card').forEach(card => {
      card.classList.add('reveal'); // initial hidden state
      observer.observe(card);
    });
  });
  

  const navbarColl = document.getElementsByTagName('nav');
  const navbar = navbarColl[0];
  console.log(navbar);
  window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  