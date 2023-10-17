
class Nivel{
    constructor(ctx,x,y,ancho,largo){
        this.ctx = ctx
        this.x = x
        this.y = y
        this.ancho = ancho * 0.9245
        this.largo = largo * 0.0386
    }
    draw(){
        this.ctx.fillRect(this.x,this.y,this.ancho,this.largo) //cambiar a rect() y quitar fillstyle
        this.ctx.fillStyle = 'white'
    }
}