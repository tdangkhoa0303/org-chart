import {Node} from '../Node/Node';
import {DEFAULT_CHART_OPTION} from 'constants'
import './OrgChart.css';

export class OrgChart extends HTMLElement {
    constructor(data, options) {
        super();
        this.data = data;
        this.options = options || DEFAULT_CHART_OPTION;
    }

    connectedCallback() {
        const {deps} = this.options;
        if (deps) {
            window.chartDeps = deps
        };

        this.setAttribute('class', 'org-chart');
        const chart = Node.Head(this.data);
        this.innerHTML = '';
        this.appendChild(chart);
    }
}

customElements.define('org-chart', OrgChart);
