export default class ScrollReveal {
  static init(): ScrollReveal {
    return new ScrollReveal();
  }

  constructor() {
    this.initObserver();
  }

  private initObserver(): void {
    const elements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');
    if (elements.length === 0) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      elements.forEach((el) => observer.observe(el));
    } else {
      // Fallback
      elements.forEach((el) => el.classList.add('is-visible'));
    }
  }
}
