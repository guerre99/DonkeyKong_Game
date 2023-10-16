class Background {
    constructor(ctx,canvasW,canvasH){
        this.ctx = ctx
        this.canvasW = canvasW
        this.canvasH = canvasH

        this.img = new Image()

		this.img.src = 'assets/nivel1.png'
    }

    draw (){
        this.ctx.drawImage(this.img,0,0,this.canvasW,this.canvasH)
    }

}