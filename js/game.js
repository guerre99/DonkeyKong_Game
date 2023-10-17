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

        this.nivel0 = new Nivel(this.ctx,this.canvasW - this.canvasW * 0.61,this.canvasH*0.095,this.canvasW/0.9245 * 0.22,this.canvasH)

        this.nivel1 = new Nivel(this.ctx,0,this.canvasH*0.229,this.canvasW,this.canvasH)

        this.nivel2 = new Nivel(this.ctx,this.canvasW - this.canvasW * 0.935,this.canvasH*0.3435,this.canvasW*1.3   ,this.canvasH)

        this.nivel3 = new Nivel(this.ctx,0,this.canvasH*0.497,this.canvasW,this.canvasH)

        this.nivel4 = new Nivel(this.ctx,this.canvasW - this.canvasW * 0.935,this.canvasH*0.6552,this.canvasW*1.3,this.canvasH)

        this.nivel5 = new Nivel(this.ctx,0,this.canvasH*0.8117,this.canvasW,this.canvasH)

        this.base = new Nivel(this.ctx,0,this.canvasH*0.9644,this.canvasW/0.9245,this.canvasH)

        this.barril = new Barril(this.ctx,this.canvasW,this.canvasH,this.nivel1.x,this.nivel1.ancho,this.nivel1.y,this.nivel2.x,this.nivel2.y,this.nivel3.x,this.nivel3.ancho,this.nivel3.y,this.nivel4.x,this.nivel4.y,this.nivel5.x,this.nivel5.ancho,this.nivel5.y,this.base.y)


		
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
        this.nivel0.draw()
        this.nivel1.draw()
        this.nivel2.draw()
        this.nivel3.draw()
        this.nivel4.draw()
        this.nivel5.draw()
        this.base.draw()
        this.barril.draw(this.frameCounter)
    },

    moveAll(){
        this.barril.move()
    }
}