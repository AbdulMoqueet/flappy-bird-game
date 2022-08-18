const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 600
canvas.height = 400

let spacePressed = false,
    angle = 0,
    hue = 0,
    frame = 0,
    score = 0,
    gameSpeed = 2

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    handleParticles()
    handleObstacles()

    bird.update()
    bird.draw()

    ctx.fillStyle = 'red'
    ctx.font = '90px Georgia'
    ctx.strokeText(score, 450, 70)
    ctx.fillText(score, 450, 70)

    
    // if (handleCollisions()) return
    requestAnimationFrame(animate)
    angle += 0.12
    hue++
    frame++
}

animate()

window.addEventListener('keydown', function (e) {
    if (e.code === 'Space') spacePressed = true
})

window.addEventListener('keyup', function (e) {
    if (e.code === 'Space') spacePressed = false
})

const bang = new Image()
bang.src = 'bang.png'

function handleCollisions() {
    for (let i = 0; i < obstaclesArray.length; i++) {

        if (bird.x < obstaclesArray[i].x + obstaclesArray[i].width &&
            bird.x + bird.width > obstaclesArray[i].x &&
            ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) ||
                (bird.y > canvas.height - obstaclesArray[i].bottom &&
                    bird.y + bird.height < canvas.height))) {
                        ctx.drawImage(bang, bird.x, bird.y, 50, 50)
                        ctx.font = "25px Georgia"
                        ctx.fillStyle = "black"
                        ctx.fillText("Game Over, Your Score is: "+score, 160, canvas.height/2 + 20)
            return true
        }

    }
}