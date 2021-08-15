export class Node {
	constructor(id, name, title, picture) {
		this.id = id;
		this.name = name;
		this.title = title;
		this.picture = picture;
		this.subItems = [];
	}
}
