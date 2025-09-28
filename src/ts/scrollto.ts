export default class ScrollTo {
  static init() {
    new ScrollTo();
  }

  private readonly SELECTOR: string = '[data-scrollto]';
  private readonly btnList: NodeListOf<HTMLElement>;
  private targets: { [id: string]: number } = {};

  private constructor() {
    this.btnList = document.querySelectorAll(this.SELECTOR);

    if (this.btnList.length > 0) {
      setTimeout(() => this.initEventListener(), 300);
    }
  }

  private initEventListener() {
    Array.prototype.forEach.call(this.btnList, (item: HTMLElement) => {
      const id: string = item.dataset[`scrollto`] as string;

      this.saveTargetOffset(id);
      item.addEventListener('click', () => this.scrollToTarget(id), false);
    });
  }

  private saveTargetOffset(id: string): void {
    this.targets[id] = (document.getElementById(id) as HTMLElement).offsetTop;
  }

  private scrollToTarget(id: string): void {
    window.scroll({
      top: this.targets[id] || 0,
      behavior: 'smooth',
    });
  }
}
