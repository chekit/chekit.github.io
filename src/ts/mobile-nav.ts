export default class MobileNav {
  static init(): MobileNav {
    return new MobileNav();
  }

  private readonly toggleBtn: HTMLElement | null;
  private readonly mobileNav: HTMLElement | null;
  private readonly mobileLinks: NodeListOf<HTMLElement>;

  constructor() {
    this.toggleBtn = document.getElementById('navbar-toggle');
    this.mobileNav = document.getElementById('mobile-nav');
    this.mobileLinks = document.querySelectorAll('.mobile-nav__link');

    this.initEventListeners();
  }

  private initEventListeners(): void {
    if (!this.toggleBtn || !this.mobileNav) return;

    this.toggleBtn.addEventListener('click', () => {
      this.toggle();
    });

    this.mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        this.close();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    });
  }

  public toggle(): void {
    if (!this.toggleBtn || !this.mobileNav) return;
    const isOpen = this.mobileNav.classList.contains('is-open');
    if (isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  public open(): void {
    this.toggleBtn?.classList.add('is-active');
    this.mobileNav?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  public close(): void {
    this.toggleBtn?.classList.remove('is-active');
    this.mobileNav?.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}
