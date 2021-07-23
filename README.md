# org-chart
Implement an organization chart in JavaScript

## Available Scripts

In the project directory, you can run:

### `yarn start`

Start the app in develop mode
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## Usage
```javascript
const chart = new OrgChart(data, options);
document.getElementById('root').appendChild(chart);
```
### `data`
```javascript
const data = {
	id: 1,
	name: 'Stoddard Everingham',
	title: 'Financial Analyst',
	picture: 'https://picsum.photos/300/300',
	subItems: [
		{
			id: 2,
			name: 'Chrissie Osgardby',
			title: 'Editor',
			picture: 'https://picsum.photos/300/300',
			subItems: []
		}
	]
}
```

### `options`
* #### `deps` height of initial chart

