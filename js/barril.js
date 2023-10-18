

class Barril{
    constructor(ctx){
        this.ctx = ctx
        this.x = 100  
        this.y = 140
        this.w = 36
        this.h = 24

        this.img = new Image()

        this.img.src = 'assets/barril2a.png'

        this.img.frameIndex = 0
		this.img.frames = 4

        this.vx = -2

        this.fall()
    }

    draw(frameCounter){
        this.ctx.drawImage(
            this.img,
            this.img.frameIndex * (this.img.width / this.img.frames),
            0,
            this.img.width / this.img.frames,
			this.img.height,
            this.x,
			this.y,
			this.w,
			this.h
        )
        this.animateSprite(frameCounter)
    }

    stop() {
		if (this.falling) this.vx *= -1

		this.falling = false
		this.vy = 0
	}

    fall() {
		if (this.falling) return

		this.vy = 2
		this.falling = true
	}

    move() {
		const gravity = 0.4

		if (this.falling) {
			this.vy += gravity
			this.y += this.vy
		} else {
			this.x += this.vx
		}
	}
    
    animateSprite(frameCounter) {
		if (frameCounter % 6 === 0) {
			this.img.frameIndex++

			if (this.img.frameIndex >= this.img.frames) {
				this.img.frameIndex = 0
			}
		}
	}
}
