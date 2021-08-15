import { Node } from '../Node/Node';
import { loadData } from '../../utils';
import { DEFAULT_CHART_OPTION } from 'constants';
import './OrgChart.css';
import { CreateNodeModal } from '../CreateNodeModal/CreateNodeModal';
import { saveData } from '../../utils';

export class OrgChart extends HTMLElement {
	constructor(options) {
		super();
		this.options = options || DEFAULT_CHART_OPTION;
		this.data = loadData();
	}

	saveChartData = () => {
		saveData(this.data);
	};

	connectedCallback() {
		this._render();
		window.saveChartData = this.saveChartData;
	}

	_render = () => {
		const { deps } = this.options;
		if (deps) {
			window.chartDeps = deps;
		}

		this.setAttribute('class', 'org-chart');
		const chart = Node.Head(this.data);
		const modal = new CreateNodeModal();
		this.innerHTML = '';
		this.appendChild(chart);
		this.appendChild(modal);
	};
}

customElements.define('org-chart', OrgChart);
