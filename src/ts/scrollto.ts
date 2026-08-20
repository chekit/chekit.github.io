export default class ScrollTo {
  static init(): ScrollTo {
    return new ScrollTo();
  }

  private readonly SELECTOR: string = '[data-scrollto]';
  private readonly NAVBAR_OFFSET: number = 70;

  constructor() {
    this.initEventListeners();
  }

  private initEventListeners(): void {
    const btnList = document.querySelectorAll<HTMLElement>(this.SELECTOR);
    btnList.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.dataset.scrollto;
        if (targetId) {
          this.scrollToTarget(targetId);
        }
      });
    });

    // Also listen to hash links like href="#about"
    const hashLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    hashLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.length > 1) {
          const targetId = href.substring(1);
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            e.preventDefault();
            this.scrollToTarget(targetId);
          }
        }
      });
    });
  }

  public scrollToTarget(id: string): void {
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - this.NAVBAR_OFFSET;

    window.scrollTo({
      top: offsetPosition >= 0 ? offsetPosition : 0,
      behavior: 'smooth',
    });
  }
}
