import {createChildren, createEgde, createOrgCard} from 'utils';
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

	toggleShowChildren = (event) => {
		const {subItems} = this.data;
		if (!subItems.length) {
			return;
		}

		const orgCardContainer = event.currentTarget.parentNode;
		const nodeContentContainer = this.querySelector('.node-content');
		const children = this.querySelector('.children-container');
		orgCardContainer.classList.toggle('showChildren');
		if (children) {
			return nodeContentContainer.removeChild(children);
		}

		this.renderChildren();
	};

	removeItem = (event) => {
		const {detail: destinationNode, target: movingNode} = event
		const {subItems} = this.data;

		destinationNode.data.subItems.push(movingNode.data)
		this.data.subItems = subItems.filter(item => item !== movingNode.data)
		destinationNode.renderChildren();
		this.renderChildren();
	}

	renderChildren = () => {
		const {previousChildrenLength, data, level, removeItem} = this;
		const {subItems} = data;

		const childrenContainer = this.querySelector('.children-container');
		const orgCardContainer = this.querySelector('.org-card__container')
		const orgCard = this.querySelector('.org-card');
		const isSubItemsChanged = previousChildrenLength !== subItems.length;
		if (!isSubItemsChanged) {
			return;
		}

		if (!subItems.length) {
			orgCard.classList.remove('hasChild');
		}

		orgCardContainer.classList.toggle('showChildren', subItems.length);
		const nodeContentContainer = this.querySelector('.node-content');
		this.childrenNode = createChildren(subItems, level, removeItem);

		if (childrenContainer) {
			return nodeContentContainer.replaceChild(
				this.childrenNode,
				childrenContainer
			);
		}

		return nodeContentContainer.appendChild(this.childrenNode);
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

	renderNodeContent = () => {
		const {data, isHead} = this;
		const container = document.createElement('div');
		container.classList.add('node-content');
		const orgCard = createOrgCard(data, this.toggleShowChildren, isHead);
		container.appendChild(orgCard);
		if (!isHead) {
			container.setAttribute('draggable', true);
			container.addEventListener('dragstart', (event) => {
				event.stopPropagation();
				event.dataTransfer.dropEffect = "move";
				window.draggingNode = this;
			})
		}

		container.addEventListener('dragover', (event) => {
			event.preventDefault();
			event.dataTransfer.dropEffect = "move";
		})

		container.addEventListener('drop', (event) => {
			event.stopPropagation();
			const {draggingNode} = window;
			if (!draggingNode) {
				return;
			}

			draggingNode.dispatchEvent(new CustomEvent('move', {detail: this}));
		})

		this.appendChild(container)
		// Show children if its level < deps
		if (this.level < window.chartDeps) {
			this.renderChildren()
		}
	}

	buildNode = () => {
		const {isMostLeft, isMostRight, isHead} = this;
		this.innerHTML = '';
		this.classList.add('node');

		const edges = createEgde(isMostLeft, isMostRight, isHead);
		edges.forEach((edge) => this.appendChild(edge));

		this.renderNodeContent();
	};
}

customElements.define('chart-node', Node);
