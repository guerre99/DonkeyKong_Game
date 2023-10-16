const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let canvasW = canvas.width = innerWidth
let canvasH = canvas.height = innerHeight

let x = 400
let y = 30
let ancho = 50
let largo = 50
let dx = 1
let dy = 1
let y0 = y


function move(){
    if (x >= (canvas.width - largo)){ 
        dx *= -1
        x = (canvas.width - largo)
    }

    if(x === (canvas.width - largo)){
        y += dy
        console.log(y)
        if (y >= y0 + 100*dy){
            y0 = y
            dy= 0
        }else x -= dx
    }

    if(x <= 0){
        dx *= -1
        x += 0
        console.log(x)
    }

    if (x === 0){
        dy = 2
        y += dy
        console.log(x,y, y0 + 50*dy)
        if (y >= y0 + 50*dy){
            y0 = y
            dy= 0
        }else x += dx
    }
   
    x += dx
}


// function move(){
    

//     for(let i = 0;i<5;i++){
//         if(i%2 == 0){
//             for(j=0;j<2;j++){
//                 if(j=0 && x <=500){
//                     x += dx
//                 }
//                 else if(j=1 && x == 500){
//                     y+=dy
//                 }
//             }
//         }
//         if(i%2 !== 0){
//             for(j=0;j<2;j++){
//                 if(j=0 && x >=20){
//                     x -= dx
//                 }
//                 else if(j=1 && x == 20){
//                     y+=dy
//                 }
//             }
//         }
//     }
// }

const fondo = new Background(ctx,canvas.width,canvas.height)

function draw(){
    ctx.fillStyle= 'red'
    ctx.fillRect(x,y,50,50)
    this.fondo.draw()

}

let frameCounter = 0
this.intervalId = setInterval(() => {

    frameCounter ++

    ctx.clearRect(0, 0,canvas.width,canvas.height)
    // console.log('test')
    draw()
    move()

},1000/1200)