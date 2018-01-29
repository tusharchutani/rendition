export class Tooltips {
	private DOMElement: HTMLSpanElement;

	constructor() {
		const el = document.createElement('span');
		el.style.visibility = 'hidden';
		el.style.background = 'black';
		el.style.color = 'white';
		el.style.position = 'absolute';
		this.DOMElement = el;
		document.body.appendChild(el);
	}

	bindProps(tooltipText: string, props: any) {
		if (tooltipText) {
			if (props.onMouseEnter) {
				const oldFn = props.onMouseEnter;
				props.onMouseEnter = (e: Event) =>
					this.show(e, tooltipText) || oldFn(e);
			} else {
				props.onMouseEnter = (e: Event) => this.show(e, tooltipText);
			}
			if (props.onMouseLeave) {
				const oldFn = props.onMouseLeave;
				props.onMouseLeave = (e: Event) => this.hide() || oldFn(e);
			} else {
				props.onMouseLeave = () => this.hide();
			}
		}

		return props;
	}

	show(e: Event, tooltipText: string): void {
		console.log({ target: e.target });
		const boundingRect = (e.target as any).getBoundingClientRect();
		console.log(boundingRect);
		this.DOMElement.innerText = tooltipText;

		this.DOMElement.style.top = `${boundingRect.top -
			this.DOMElement.clientHeight}px`;
		this.DOMElement.style.left = `${boundingRect.left}px`;
		this.DOMElement.style.visibility = 'visible';
	}

	hide(): void {
		this.DOMElement.style.visibility = 'hidden';
	}
}
