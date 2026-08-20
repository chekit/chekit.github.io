export default class CopyEmail {
  static init(): CopyEmail {
    return new CopyEmail();
  }

  private readonly copyButtons: NodeListOf<HTMLElement>;
  private readonly toast: HTMLElement | null;
  private toastTimeout: number | null = null;

  constructor() {
    this.copyButtons = document.querySelectorAll<HTMLElement>('[data-copy-email]');
    this.toast = document.getElementById('toast');
    this.initEventListeners();
  }

  private initEventListeners(): void {
    this.copyButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = btn.dataset.copyEmail || 'chekitdnb@gmail.com';
        this.copyToClipboard(email);
      });
    });
  }

  private async copyToClipboard(text: string): Promise<void> {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      this.showToast(`Email copied: ${text}`);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }

  private showToast(message: string): void {
    if (!this.toast) return;

    const toastMsg = this.toast.querySelector<HTMLElement>('.toast__message');
    if (toastMsg) {
      toastMsg.textContent = message;
    }

    this.toast.classList.add('is-visible');

    if (this.toastTimeout) {
      window.clearTimeout(this.toastTimeout);
    }

    this.toastTimeout = window.setTimeout(() => {
      if (this.toast) {
        this.toast.classList.remove('is-visible');
      }
    }, 3000);
  }
}
