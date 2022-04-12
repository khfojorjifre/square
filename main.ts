input.onButtonPressed(Button.A, function () {
    turtle.pen(TurtlePenMode.Down)
    for (let index = 0; index <= 4; index++) {
        turtle.forward(1)
        turtle.turnRight()
    }
})
