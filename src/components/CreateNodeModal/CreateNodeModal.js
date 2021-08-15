import { Modal } from '../Modal/Modal';
import './CreateNodeModal.scss';
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
				<div class="row">
					<div class="col-12">
						<div class="form-control">
							<label for="name">Name</label>
							<input type="text" name="name" id="name" required />
						</div>
					</div>		
					<div class="col-12 col-sm-6">
						<div class="form-control">
							<label for="id">ID</label>
							<input type="number" name="id" id="id" required />
						</div>
					</div>
					<div class="col-12 col-sm-6">
						<div class="form-control">
							<label for="title">Title</label>
							<input type="text" name="title" id="title" required />
						</div>
					</div>
					<div class="col-4">
						<img 
							src="https://play-lh.googleusercontent.com/kgSwHEst2ENqeYoasBoxvUcPD97c0RdIUxRYy6KlMUjiWlwzvPqg4ZSNGrweAps_g7c" 
							alt="demo-avatar" id="demo-avatar" 
						/>
					</div>
					<div class="col-sm-8">
						<div class="row">
							<div class="col-12">
								<div class="form-control">
									<label for="title">Picture</label>
									<input type="url" name="picture" id="picture" required />
								</div>
							</div>
							<div class="col-12">
								<div class="form-control">
									<label for="dc">DC</label>
									<input type="text" name="dc" id="dc" />
								</div>
							</div>
						</div>
					</div>
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
		const form = document.querySelector('#create-node-form');
		const demo = document.querySelector('#demo-avatar');
		const pictureInput = document.querySelector('#picture');
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

		if (pictureInput) {
			pictureInput.addEventListener('blur', (event) => {
				if (event.target.value) {
					demo.setAttribute('src', event.target.value);
				}
			});
		}
	}
}

customElements.define('create-node-modal', CreateNodeModal);
