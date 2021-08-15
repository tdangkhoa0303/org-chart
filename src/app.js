import { OrgChart } from './components';
import './App.css';

const chart = new OrgChart({
	deps: 2,
});
document.getElementById('root').appendChild(chart);
