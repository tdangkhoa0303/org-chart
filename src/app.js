import { OrgChart } from './components';
import './index.scss';

const chart = new OrgChart({
	deps: 2,
});
document.getElementById('root').appendChild(chart);
