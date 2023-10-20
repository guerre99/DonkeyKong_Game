class Player {
    constructor(ctx,canvasW,canvasH,keys){
        this.ctx = ctx
        this.canvasW = canvasW
        this.canvasH = canvasH
        this.keys = keys
        this.x = 260
        this.y = 500
        this.y0
        this.w = 36
        this.h = 24

        // this.img = new Image()
        // this.img.src = 'assets/marioDCHA.gif'
        // this.img.frameIndex = 0
        // this.frames = 3

        this.vx = 2
        this.vy = 0
		this.gravity = 0.3


        this.actions = {
			jump: false,
			right: false,
            left: false,
            up: false,
            down: false,
            enEscalera: false
		}

        // this.caer()
        this.setControls()
    }

    


    // caer(){
	// 	if (this.falling) return

	// 	this.vy = 2
	// 	this.falling = true
    // }



    setControls(){
        document.addEventListener('keydown', (event) => {
			switch (event.code) {
				case this.keys.jump:
                    if(!this.actions.jump){
					this.actions.jump = true
                    this.vy = -4
                    this.y -= 20
                    }
					break

				case this.keys.right:
					this.actions.right = true
                 
					break
                
                case this.keys.left:
					this.actions.left = true
                 
					break
                
                case this.keys.up:
                    if(this.actions.enEscalera) {
                        this.y -= 1
                        this.actions.up = true
                    }
				
                   
					break

                case this.keys.down:
                    if(this.actions.enEscalera) {
                        this.actions.down = true
                    }
				
                  
					break
			}
        
		})

        document.addEventListener('keyup', (event) => {
			switch (event.code) {

				case this.keys.right:
					this.actions.right = false
                  
					break
                
                case this.keys.left:
			    	this.actions.left = false
               
					break
                
                case this.keys.up:

              
					this.actions.up = false
                  
                  
					break

                case this.keys.down:
				
					this.actions.down = false
                
                 
					break
			}
        })
    }
    move() {

		// if (this.falling) {
		// 	this.vy += this.gravity
		// 	this.y += this.vy
		// }

        if(this.actions.enEscalera && this.actions.down){
            this.y += 2
        }else if(this.actions.enEscalera && this.actions.up){
            this.y -= 2
        } else if (this.actions.jump) {
            this.vy += this.gravity 
            this.y += this.vy
        } else {
            this.vy = 0
        }

        if(this.actions.right) this.x += this.vx
        else if (this.actions.left) this.x -= this.vx
        
       
        console.log(this.actions)
	}

    draw(/*frameCounter*/){
        this.ctx.fillRect(this.x,this.y,this.w,this.h)
        this.ctx.fillStyle = 'white'
        // this.ctx.drawImage(
        //     this.img,
        //     this.img.frameIndex * (this.img.width / this.img.frames),
        //     0,
        //     this.img.width / this.img.frames,
		// 	this.img.height,
        //     this.x,
		// 	this.y,
		// 	this.w,
		// 	this.h
        // )
        // this.animateSprite(frameCounter)
    }

    // animateSprite(frameCounter) {
	// 	if (frameCounter % 6 === 0) {
	// 		this.img.frameIndex++

	// 		if (this.img.frameIndex >= this.img.frames) {
	// 			this.img.frameIndex = 0
	// 		}
	// 	}
	// }
}