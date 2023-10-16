const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let canvasW = canvas.width = innerWidth
let canvasH = canvas.height = innerHeight

let x = 100
let y = 100
let ancho = 50
let largo = 50
let dx = 1
let dy = 50
let y0 = 0


function move(){
    if(x > canvasW - ancho || x < 0){
        dx *= -1
    }
    else if (x == canvasW -ancho || x == 0){
        y += dy
    }
   
    x += dx
}


function draw(){
    ctx.fillStyle= 'red'
    ctx.fillRect(x,y,50,50)

}

let frameCounter = 0
this.intervalId = setInterval(() => {

    frameCounter ++

    ctx.clearRect(0, 0,canvas.width,canvas.height)
    draw()
    move()

},1000/1200)