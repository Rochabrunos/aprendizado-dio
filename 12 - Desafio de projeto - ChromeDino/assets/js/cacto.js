export class Cacto {
	constructor() {
		this.__cactoElement = document.createElement("div");
		this.__cactoElement.classList.add("game__cactus");
	}
	get cactoElement() {
		return this.__cactoElement;
	}
	move() {
		this.cactoElement.classList.add("game__cactus-move");
	}
}
