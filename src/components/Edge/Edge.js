import './Edge.css';

export class Edge extends HTMLElement {
    constructor(isLeft) {
        super();
        this.isLeft = isLeft;
    }

    connectedCallback() {
        const {isLeft} = this;
        const classes = [
            'edge',
            isLeft ? 'edge_left' : 'edge_right'
        ].join(' ');
        this.setAttribute('class', classes);
    }
}

customElements.define('chart-edge', Edge);