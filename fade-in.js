
  document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-in');

    const options = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, options);

    faders.forEach(fader => {
      observer.observe(fader);
    });
  });

