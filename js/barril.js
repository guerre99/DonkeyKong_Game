

class Barril{
    constructor(ctx,canvasW,canvasH,nivel1X,nivel1W,nivel1Y,nivel2X,nivel2Y,nivel3X,nivel3W,nivel3Y,nivel4X,nivel4Y,nivel5X,nivel5W,nivel5Y,baseY){
        this.ctx = ctx
        this.canvasW = canvasW
        this.canvasH = canvasH
        this.x = 100  
        this.y = 140
        this.ancho = 50
        this.largo = 50
        this.dx = 5
        this.dy = 1
        this.nivel1X = nivel1X
        this.nivel1W = nivel1W
        this.nivel1Y = nivel1Y
        this.nivel2X = nivel2X
        this.nivel2Y = nivel2Y
        this.nivel3X = nivel3X
        this.nivel3W = nivel3W
        this.nivel3Y = nivel3Y
        this.nivel4X = nivel4X
        this.nivel4Y = nivel4Y
        this.nivel5X = nivel5X
        this.nivel5W = nivel5W
        this.nivel5Y = nivel5Y
        this.baseY = baseY

        this.img = new Image()

        this.img.src = 'assets/barril2.png'

        this.img.frameIndex = 0
		this.img.frames = 4
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
			this.ancho,
			this.largo
        )
        this.animateSprite(frameCounter)
    }
    
    animateSprite(frameCounter) {
		if (frameCounter % 6 === 0) {
			this.img.frameIndex++

			if (this.img.frameIndex >= this.img.frames) {
				this.img.frameIndex = 0
			}
		}
	}
    
    collision(){
    
        let collision = false
        
        const contactoX = (this.x <= this.nivel1X + this.nivel1W || this.nivel2X >= this.x + this.w || this.x <= this.nivel3X + this.nivel3W || this.nivel4X >= this.x + this.w || this.x <= this.nivel5X + this.nivel5W)
    
    
    
        const contactoY = (this.y + this.h === this.nivel1Y || this.y + this.h === this.nivel2Y ||this.y + this.h === this.nivel3Y ||this.y + this.h === this.nivel4Y ||this.y + this.h === this.nivel5Y || this.y + this.h === this.baseY)
    
    
        while (contactoX && contactoY){
            collision = true
        }
    
        return collision
    }

    move(){
        if(this.collision()){
            this.x+= this.dx
        }
        else if(!this.collision()){
            this.y += this.dy
        }
    }
}
