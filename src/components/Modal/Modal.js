export class Modal extends HTMLElement {
	get visible() {
		return this.hasAttribute('visible');
	}

	set visible(value) {
		if (value) {
			return this.setAttribute('visible', '');
		}

		this.removeAttribute('visible');
	}

	get modalTitle() {
		return this.getAttribute('modalTitle');
	}

	set modalTitle(value) {
		this.setAttribute('modalTitle', value);
	}

	constructor() {
		super();
	}

	connectedCallback() {
		this._render();
		this._attachEventHandlers();
	}

	static get observedAttributes() {
		return ['visible', 'modalTitle'];
	}

	attributeChangedCallback(name, _, newValue) {
		if (!this.shadowRoot) {
			return;
		}

		switch (name) {
			case 'visible':
				if (newValue === null) {
					this.dispatchEvent(new CustomEvent('close'));
					return this.shadowRoot
						.querySelector('.wrapper')
						.classList.remove('visible');
				}

				this.shadowRoot
					.querySelector('.wrapper')
					.classList.add('visible');
				break;
			case 'modalTitle':
				this.shadowRoot.querySelector('.title').textContent = newValue;
				break;
			default:
				return;
		}
	}

	_render() {
		const wrapperClass = this.visible ? 'wrapper visible' : 'wrapper';
		const container = document.createElement('div');
		container.innerHTML = `
        <style>
          .wrapper {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #33333330;
            opacity: 0;
            visibility: hidden;
            transform: scale(1.1);
            transition: visibility 0s linear .25s,opacity .25s 0s,transform .25s;
            z-index: 1;
          }
          .visible {
            opacity: 1;
            visibility: visible;
            transform: scale(1);
            transition: visibility 0s linear 0s,opacity .25s 0s,transform .25s;
          }
          .modal {
            font-size: 16px;
            background-color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            border-radius: 2px;
            min-width: 300px;
            border-radius: 4px;
            min-width: 400px;
          }
          .title {
            font-size: 1rem;
            border-bottom: 1px solid #999999;
            padding: 1rem;
          }
          .button-container {
            text-align: right;
          }
          button {
            min-width: 80px;
            background-color: #848e97;
            border-color: #848e97;
            border-style: solid;
            border-radius: 2px;
            padding: 3px;
            color:white;
            cursor: pointer;
          }
          span.modal__close {
              position: absolute;
              top: 1rem;
              right: 1rem;
              cursor: pointer;
              font-size: 1rem;
              padding: 4px;
              border-radius: 50%;
              background-color: #33333300;
              transition: all 0.25s ease;
          }
          span.modal__close:hover {
            background-color: #33333310;
        }
          button:hover {
            background-color: #6c757d;
            border-color: #6c757d;
          }
          .content {
              padding: 1rem;
          }
        </style>
        <link
			href="https://fonts.googleapis.com/icon?family=Material+Icons"
			rel="stylesheet"
		/>
        <div class='${wrapperClass}'>
          <div class='modal'>
            <span class="material-icons modal__close">close</span>
            <div class='title'>${this.modalTitle}</div>
            <div class='content'>
              <slot></slot>
            </div>
          </div>
        </div>`;

		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.appendChild(container);
	}

	_attachEventHandlers() {
		const closeButton = this.shadowRoot.querySelector('.modal__close');
		closeButton.addEventListener('click', (e) => {
			this.removeAttribute('visible');
		});
	}
}

customElements.define('chart-modal', Modal);
