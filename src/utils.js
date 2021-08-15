import { Node, Edge } from './components';
import sampleData from './data';

export const createOrgCard = (data, onClick, isHead) => {
	const { name, subItems, picture, title } = data;
	const nodeContainer = document.createElement('div');
	const containerClasses = ['org-card__container', !isHead && 'children']
		.filter(Boolean)
		.join(' ');
	nodeContainer.setAttribute('class', containerClasses);
	const node = document.createElement('div');
	node.setAttribute('class', 'org-card');
	if (subItems.length) {
		node.addEventListener('click', onClick);
		node.classList.add('hasChild');
	}
	node.innerHTML = `
    <img class="org-card__picture" src="${picture}" alt="${name}" />
    <div class="org-card__name">${name}</div>
    <div class="org-card__title">${title}</div>
	<span class="material-icons org-card__addChildren">control_point</span>
    <span class="material-icons org-card__showChildren">keyboard_arrow_down</span>
    `;
	nodeContainer.appendChild(node);

	return nodeContainer;
};

export const createEgde = (isMostLeft, isMostRight, isHead) => {
	if (isHead || (isMostRight && isMostLeft)) {
		return [];
	}

	if (isMostLeft || isMostRight) {
		return [new Edge(isMostRight)];
	}

	return [new Edge(true), new Edge()];
};

export const createChildren = (children, currentLevel) => {
	if (!children.length) {
		return null;
	}
	const childrenContainer = document.createElement('div');
	childrenContainer.className = 'children-container';
	children.forEach((child, index) => {
		const isMostLeft = index === 0;
		const isMostRight = index === children.length - 1;
		childrenContainer.appendChild(
			Node.Item(child, currentLevel + 1, isMostLeft, isMostRight)
		);
	});

	return childrenContainer;
};

export const loadData = () => {
	try {
		const localStorage = window.localStorage;
		if (localStorage && localStorage.getItem('org-data')) {
			return JSON.parse(localStorage.getItem('org-data'));
		}

		return sampleData;
	} catch (err) {
		console.error('Failed to load data from LocalStorage');
		console.info('Load sample data instead');
		return sampleData;
	}
};

export const saveData = (data) => {
	try {
		const localStorage = window.localStorage;
		if (localStorage) {
			return localStorage.setItem('org-data', JSON.stringify(data));
		}

		throw new Error('Failed to save data to LocalStorage');
	} catch (err) {
		console.error('Failed to save data to LocalStorage');
	}
};
