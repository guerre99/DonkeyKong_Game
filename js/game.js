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

        this.escaleras = [
            new Escaleras(this.ctx,this.canvasW*0.28125,0,this.canvasW * 0.035807,this.canvasH*0.229),
            new Escaleras(this.ctx,this.canvasW*0.35286,0,this.canvasW * 0.035807,this.canvasH*0.229),            
            new Escaleras(this.ctx,this.canvasW*0.568359,this.canvasH*0.095,this.canvasW * 0.035807,this.canvasH*0.134),
            new Escaleras(this.ctx,this.canvasW*0.828776,this.canvasH*0.229,this.canvasW * 0.035807,this.canvasH*0.1145),
            new Escaleras(this.ctx,this.canvasW*0.091145,this.canvasH*0.3435,this.canvasW * 0.035807,this.canvasH*0.1535),
            new Escaleras(this.ctx,this.canvasW*0.885416,this.canvasH*0.497,this.canvasW * 0.035807,this.canvasH*0.1582),
            new Escaleras(this.ctx,this.canvasW*0.123687,this.canvasH*0.6552,this.canvasW * 0.035807,this.canvasH*0.1565),
            new Escaleras(this.ctx,this.canvasW*0.885416,this.canvasH*0.8117,this.canvasW * 0.035807,this.canvasH*0.1527)
        ]
        
        // w 1536 h 786

        this.barril = []
		
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

			if (this.frameCounter % 100 === 0) {
				this.generateBarril()
			}
            
		}, 1000 / this.fps)
	},

    drawAll(){
        this.background.draw(this.frameCounter)
        this.niveles.forEach((nivel) => {
            nivel.draw()
        })
        this.escaleras.forEach((escalera) => {
            escalera.draw()
        })
        this.barril.forEach((barril) => {
            barril.draw(this.frameCounter)
            if (
                !this.niveles.some((nivel) => {
                    const isCollision =
                        barril.y + barril.h >= nivel.y &&
                        barril.y < nivel.y + nivel.h &&
                        barril.x + barril.w > nivel.x &&
                        barril.x < nivel.x + nivel.w
        
                    if (isCollision) {
                        barril.stop()
                        barril.y = nivel.y - barril.h
                    }
        
                    return isCollision
                })
            )
            barril.fall()
            if(barril.y > this.canvasH + 200) this.barril.shift(0)
        })
    },

    moveAll(){
        this.barril.forEach((barril) => {
            barril.move()
        })
    },

    generateBarril: function () {
		this.barril.push(
			new Barril(this.ctx,this.canvasW,this.canvasH)
		)
	},
}