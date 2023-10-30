/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program showsa while loop
*/

let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// press "A" button
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)
    while (loopCounter <= 5) {
        basic.pause(500)
        sprite.move(1)
        loopCounter = loopCounter + 1
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// press "B" button
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    loopCounter = 5
    sprite = game.createSprite(5, 0)
    while (loopCounter >= 0) {
        basic.pause(500)
        sprite.move(-1)
        loopCounter = loopCounter - 1
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
