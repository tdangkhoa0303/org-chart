import { Modal } from '../Modal/Modal';
import './CreateNodeModal.css';
import { Node } from '../../models';

export class CreateNodeModal extends HTMLElement {
	constructor() {
		super();
		this._attachEventHandlers = this._attachEventHandlers.bind(this);
	}

	connectedCallback() {
		this._render();
		this.modal = this.querySelector('#create-node');
		this._attachEventHandlers();
	}

	_render() {
		this.innerHTML = `
        <chart-modal modalTitle="Create new node" id="create-node">
			<form action="#" id="create-node-form">
				<div class="form-control">
					<label for="id">ID</label>
					<input type="number" name="id" id="id" required />
				</div>
				<div class="form-control">
					<label for="name">Name</label>
					<input type="text" name="name" id="name" required />
				</div>
				<div class="form-control">
					<label for="title">Title</label>
					<input type="text" name="title" id="title" required />
				</div>
				<div class="form-control">
					<label for="title">Picture</label>
					<input type="url" name="picture" id="picture" required />
				</div>
                <div class="form-footer">
                    <button class="btn btn-secondary btn-cancel" type="button">Cancle</button>
                    <button class="btn btn-primary" type="submit">Create</button>
                </div>
			</form>
		</chart-modal>`;
	}

	attributeChangedCallback(name, _, newValue) {
		console.log(name);
	}

	_attachEventHandlers() {
		const cancelBtn = this.querySelector('.btn-cancel');
		const form = document.getElementById('create-node-form');
		const modal = this.modal;

		if (cancelBtn) {
			cancelBtn.addEventListener('click', () => {
				this.modal.removeAttribute('visible');
			});
		}

		if (form) {
			form.addEventListener('submit', (event) => {
				event.preventDefault();
				const form = event.target;
				const editingNode = window.editingNode;
				if (!form || !editingNode) {
					return;
				}

				const { name, id, title, picture } = form.elements;
				const node = new Node(
					id.value,
					name.value,
					title.value,
					picture.value
				);

				if (
					editingNode.data &&
					editingNode.data.subItems instanceof Array
				) {
					editingNode.data.subItems.push(node);
					editingNode.renderChildren();
					window.saveChartData();
					this.modal.removeAttribute('visible');
				}
			});
		}

		if (modal) {
			modal.addEventListener('close', () => {
				form && form.reset();
			});
		}
	}
}

customElements.define('create-node-modal', CreateNodeModal);
