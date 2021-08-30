import {OrgChart} from './components';
import './index.scss';

const chart = new OrgChart({
	deps: 1,
});
document.getElementById('root').appendChild(chart);
