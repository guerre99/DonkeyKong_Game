class Player {
    constructor(ctx,canvasW,canvasH,keys){
        this.ctx = ctx
        this.canvasW = canvasW
        this.canvasH = canvasH
        this.keys = keys
        this.x = 100
        this.y = 700
        this.y0 = this.y
        this.w = 36
        this.h = 24

        // this.img = new Image()
        // this.img.src = 'assets/marioDCHA.gif'
        // this.img.frameIndex = 0
        // this.frames = 3

        this.vx = 0
        this.vy = 0
        this.gravity = 0.5

        this.actions = {
			jump: false,
			right: false,
            left: false,
            up: false,
            down: false
		}

        this.anda()
        this.saltar()
    }

    anda(){
        document.addEventListener('keydown', (event) => {
            switch (event.code) {
                    
                case this.keys.right:
                    this.actions.right = true
                    this.vx = 2
                    break
                    
                case this.keys.left:
                    this.actions.left = true
                    this.vx = 2
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
            }
        })    
    }

    saltar(){
        if (this.falling){
            this.vy = -10
            document.addEventListener('keydown', (event) => {
                switch (event.code) {
                    case this.keys.jump:
                        this.actions.jump = true
                        break
                }
            })
            document.addEventListener('keyup', (event) => {
                switch (event.code) {
                    case this.keys.jump:
                        this.actions.jump = false
    
                        break
                }
            })
            this.falling = true
        }
    }

    parar(){
        if(this.falling){
            this.falling=false
            this.vy = 0
        }
    }

    subir(){
        document.addEventListener('keydown', (event) => {
			switch (event.code) {                
                case this.keys.up:
					this.actions.up = true
                    this.vy = 2
					break

                case this.keys.down:
					this.actions.down = true
                    this.vy = 2
					break
			}
        
		})
        document.addEventListener('keyup', (event) => {
			switch (event.code) {                
                case this.keys.up:
					this.actions.up = false
					break

                case this.keys.down:
					this.actions.down = false
					break
			}
        })
    }

    // setControls(){
    //     document.addEventListener('keydown', (event) => {
	// 		switch (event.code) {
	// 			case this.keys.jump:
	// 				this.actions.jump = true
    //                 this.vy = 2

	// 				break

	// 			case this.keys.right:
	// 				this.actions.right = true
    //                 this.vx = 2
	// 				break
                
    //             case this.keys.left:
	// 				this.actions.left = true
    //                 this.vx = 2
	// 				break
                
    //             case this.keys.up:
	// 				this.actions.up = true
    //                 this.vy = 2
	// 				break

    //             case this.keys.down:
	// 				this.actions.down = true
    //                 this.vy = 2
	// 				break
	// 		}
        
	// 	})

    //     document.addEventListener('keyup', (event) => {
	// 		switch (event.code) {
    //             case this.keys.jump:
	// 				this.actions.jump = false
	// 				break

	// 			case this.keys.right:
	// 				this.actions.right = false
	// 				break
                
    //             case this.keys.left:
	// 				this.actions.left = false
	// 				break
                
    //             case this.keys.up:
	// 				this.actions.up = false
	// 				break

    //             case this.keys.down:
	// 				this.actions.down = false
	// 				break
	// 		}
    //     })
    // }

    move(){

        if(this.actions.jump){
            if (this.falling) {
                this.vy += this.gravity
                this.y += this.vy
            }
        }
        
        if (this.actions.right){

            this.x += this.vx
        }

        if(this.actions.left){
            this.x -= this.vx
        }

        if(this.actions.up){
            this.y -= this.vy
        }

        if(this.actions.down){
            this.y += this.vy
        }
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