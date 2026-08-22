export default class ScrollSpy {
  static init(): ScrollSpy {
    return new ScrollSpy();
  }

  private readonly navLinks: NodeListOf<HTMLAnchorElement>;
  private readonly sections: HTMLElement[];
  private readonly navbar: HTMLElement | null;

  constructor() {
    this.navLinks = document.querySelectorAll<HTMLAnchorElement>('.navbar__link, .mobile-nav__link');
    this.navbar = document.querySelector('.navbar');

    const sectionIds = ['intro', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
    this.sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    this.initScrollListener();
  }

  private initScrollListener(): void {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Toggle navbar glass blur shadow
      if (this.navbar) {
        if (scrollY > 30) {
          this.navbar.classList.add('is-scrolled');
        } else {
          this.navbar.classList.remove('is-scrolled');
        }
      }

      // Determine active section
      let currentSectionId = '';
      const offset = 120;

      for (const section of this.sections) {
        const top = section.offsetTop - offset;
        const height = section.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          currentSectionId = section.id;
          break;
        }
      }

      if (currentSectionId) {
        this.navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `#${currentSectionId}`) {
            link.classList.add('is-active');
          } else {
            link.classList.remove('is-active');
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }
}
