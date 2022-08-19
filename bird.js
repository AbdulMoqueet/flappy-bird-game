const plane = new Image()
plane.src = "plane.png"

class Bird {
    constructor() {
        this.x = 150
        this.y = 200
        this.vy = 0
        this.originalWidth = 430
        this.originalHeight = 276
        this.width = this.originalWidth/10
        this.height = this.originalHeight/10
        this.weight = 1
    }

    update() {
        let curve = Math.sin(angle) * 20
        console.log(curve);
        if (this.y > canvas.height - (this.height * 3) + curve) {
            this.y = canvas.height - (this.height * 3) + curve
            this.vy = 0
        } else {
            this.vy += this.weight
            this.vy *= 0.9
            this.y += this.vy
        }

        if(this.y < 0 + this.height){
            this.y = 0 + this.height   
            this.vy = 0
        }

        if(spacePressed && this.y > this.height * 3) this.flap()

    }

    draw() {
        ctx.fillStyle = 'blue'
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(plane, 0, 0, this.originalWidth, this.originalHeight, this.x - 20, this.y -20, this.width * 1.6, this.height * 1.6)
    }

    flap() {
        this.vy -= 2
    }

}

const bird = new Bird()