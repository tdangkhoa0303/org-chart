import {Node, Edge} from './components'

export const createOrgCard = (data, onClick, isHead) => {
    const {name, subItems, picture, title} = data;
    const nodeContainer = document.createElement('div');
    const containerClasses = [
        'org-card__container',
        !isHead && 'children'
    ].filter(Boolean).join(' ');
    nodeContainer.setAttribute('class', containerClasses)
    const node = document.createElement('div');
    node.setAttribute('class', 'org-card')
    if (subItems.length) {
        node.addEventListener('click', onClick);
        node.classList.add('hasChild')
    }
    node.innerHTML = `
    <img class="org-card__picture" src="${picture}" alt="${name}" />
    <div class="org-card__name">${name}</div>
    <div class="org-card__title">${title}</div>
    <span class="material-icons org-card__showChildren">keyboard_arrow_down</span>
    `
    nodeContainer.appendChild(node);

    return nodeContainer;
}

export const createEgde = (isMostLeft, isMostRight, isHead) => {
    if (isHead || (isMostRight && isMostLeft)) {
        return [];
    }

    if (isMostLeft || isMostRight) {
        return [new Edge(isMostRight)]
    }

    return [new Edge(true), new Edge()]
}

export const createChildren = (children, currentLevel) => {
    if (!children.length) {
        return null;
    }
    const childrenContainer = document.createElement('div');
    childrenContainer.className = 'children-container';
    children.forEach((child, index) => {
        const isMostLeft = index === 0;
        const isMostRight = index === (children.length - 1);
        childrenContainer.appendChild(Node.Item(child, currentLevel + 1, isMostLeft, isMostRight));
    })

    return childrenContainer
}