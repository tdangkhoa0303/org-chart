import { createChildren, createEgde, createOrgCard } from 'utils';
import './Node.scss';

export class Node extends HTMLElement {
	constructor(data, level, isMostLeft, isMostRight, isHead) {
		super();
		this.data = data;
		this.isMostLeft = isMostLeft;
		this.isMostRight = isMostRight;
		this.isHead = isHead;
		this.level = level;

		this.buildNode();
	}

	static Head(data) {
		return new Node(data, 0, false, false, true);
	}

	static Item(data, level, isMostLeft, isMostRight) {
		return new Node(data, level, isMostLeft, isMostRight);
	}

	connectedCallback() {
		this._attachEventHandlers();
	}

	buildChildrenNode = (subItems) => {
		this.previousChildrenLength = subItems.length;
		this.childrenNode = createChildren(subItems);
	};

	updateChildrenDOM = () => {
		const container = this.querySelector('.node');
		const oldChildrenContainer = container.querySelector(
			'.children-container'
		);
		if (oldChildrenContainer) {
			return container.replaceChild(
				this.childrenNode,
				oldChildrenContainer
			);
		}
		container.appendChild(this.childrenNode);
	};

	toggleShowChildren = (event) => {
		const { subItems } = this.data;
		if (!subItems.length) {
			return;
		}

		const orgCardContainer = event.currentTarget.parentNode;
		const container = this.querySelector('.node');
		const children = container.querySelector('.children-container');

		orgCardContainer.classList.toggle('showChildren');
		if (children) {
			return container.removeChild(children);
		}

		if (!this.childrenNode) {
			this.buildChildrenNode(subItems);
		}
		this.updateChildrenDOM();
	};

	renderChildren = () => {
		const { previousChildrenLength, data } = this;
		const { subItems } = data;
		const children = this.querySelector('.children-container');
		const node = this.querySelector('.org-card');
		const isSubItemsChanged = previousChildrenLength !== subItems.length;
		if (isSubItemsChanged) {
			node.classList.toggle('hasChild', subItems.length);
		}

		const shouldRenderChildren = children && isSubItemsChanged;
		if (shouldRenderChildren) {
			this.buildChildrenNode(subItems);
			this.updateChildrenDOM();
		}
	};

	_attachEventHandlers = () => {
		const addChildBtn = this.querySelector('.org-card__addChildren');
		addChildBtn.addEventListener('click', (event) => {
			event.stopPropagation();
			window.editingNode = this;
			const modal = document.querySelector('#create-node');
			modal.setAttribute('visible', true);
		});
	};

	buildNode = () => {
		const { data, isMostLeft, isMostRight, isHead } = this;
		const container = document.createElement('div');
		container.setAttribute('class', 'node');

		const edges = createEgde(isMostLeft, isMostRight, isHead);
		edges.forEach((edge) => container.appendChild(edge));

		const orgCard = createOrgCard(data, this.toggleShowChildren, isHead);
		container.appendChild(orgCard);

		// Show children if its level < deps
		if (this.level < window.chartDeps) {
			this.childrenNode = createChildren(data.subItems);
			container.appendChild(this.childrenNode);
			orgCard.classList.add('showChildren');
		}

		this.innerHTML = '';
		this.appendChild(container);
	};
}

customElements.define('chart-node', Node);
