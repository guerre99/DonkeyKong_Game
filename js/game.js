const Game = {
	ctx: undefined,
	canvasW: undefined,
	canvasH: undefined,
	fps: 60,

    init: function () {
		const canvas = document.querySelector('canvas')
		this.ctx = canvas.getContext('2d')

		this.canvasW = canvas.width = innerWidth
		this.canvasH = canvas.height = innerHeight
        this.reset()
	},

    reset: function () {
		console.log('RESET')

        this.background = new Background(this.ctx, this.canvasW, this.canvasH)

        this.niveles = [

        new Nivel(this.ctx,this.canvasW - this.canvasW * 0.61,this.canvasH*0.095,this.canvasW/0.9245 * 0.22,this.canvasH),

        new Nivel(this.ctx,0,this.canvasH*0.229,this.canvasW,this.canvasH),

        new Nivel(this.ctx,this.canvasW - this.canvasW * 0.935,this.canvasH*0.3435,this.canvasW*1.3,this.canvasH),

        new Nivel(this.ctx,0,this.canvasH*0.497,this.canvasW,this.canvasH),

        new Nivel(this.ctx,this.canvasW - this.canvasW * 0.935,this.canvasH*0.6552,this.canvasW*1.3,this.canvasH),

        new Nivel(this.ctx,0,this.canvasH*0.8117,this.canvasW,this.canvasH),

        new Nivel(this.ctx,0,this.canvasH*0.9644,this.canvasW/0.9245,this.canvasH),

        ]

        this.barril = new Barril(this.ctx,this.canvasW,this.canvasH)
		
		this.start()
	},

    start: function () {
		// loop de render

		this.frameCounter = 0

		this.intervalId = setInterval(() => {
			

			this.frameCounter++

			this.score += 0.03

            this.drawAll()
            this.moveAll()

			if (this.frameCounter % 50 === 0) {
				this.barril.draw(this.frameCounter)
			}
            
		}, 1000 / this.fps)
	},

    drawAll(){
        this.background.draw()
        this.niveles.forEach((nivel) => {
            nivel.draw()
        })
        this.barril.draw(this.frameCounter)
        if (
            !this.niveles.some((nivel) => {
                const isCollision =
                    this.barril.y + this.barril.h >= nivel.y &&
                    this.barril.y < nivel.y + nivel.h &&
                    this.barril.x + this.barril.w > nivel.x &&
                    this.barril.x < nivel.x + nivel.w
    
                if (isCollision) {
                    this.barril.stop()
                    this.barril.y = nivel.y - this.barril.h
                }
    
                return isCollision
            })
        )
            this.barril.fall()
    },

    moveAll(){
        this.barril.move()
    }
}