class Dino {
	constructor(dinoElement) {
		this.dinoElement = dinoElement;
	}
	move() {
		if (!this.isTravelling) {
			this.jump();
			setTimeout(() => this.fall(), 180);
		}
	}
	jump(step = 20) {
		this.isTravelling = true;
		let position = 0;
		setInterval(() => {
			if (position === 500) {
				clearInterval();
				this.isTravelling = false;
			} else {
				position += step;
				this.dinoElement.style.bottom = `${position}px`;
			}
		}, 20);
	}
	fall(step = 20) {
		this.isTravelling = true;
		let position = 500;
		setInterval(() => {
			if (position === 0) {
				clearInterval();
				this.isTravelling = false;
			} else {
				position -= step;
				this.dinoElement.style.bottom = `${position}px`;
			}
		}, 20);
	}
}

export { Dino };
