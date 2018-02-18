export default class ScrollTo {
	private btnList: NodeListOf<HTMLElement>;

	constructor() {
		this.btnList = document.querySelectorAll('[data-scrollto]');

		this.initEventListener();
	}

	private initEventListener() {
		Array.prototype.forEach.call(this.btnList, (item: HTMLElement) => {
			console.log(item.dataset.scrollto);
		})
	}
}