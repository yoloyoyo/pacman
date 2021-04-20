enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const yeet = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    anim = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(mySprite, anim)
    anim.addAnimationFrame(img`
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        5 5 5 5 f 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        5 5 5 5 f 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . . . . 5 5 5 5 5 5 5 5 5 . 
        . . . . . 5 5 5 5 5 5 5 5 5 5 . 
        . . . . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.setAction(mySprite, ActionKind.Walking)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.yeet, function (sprite, otherSprite) {
    canEatEnemy = true
    otherSprite.destroy()
    pause(5000)
    canEatEnemy = false
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    anim = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(mySprite, anim)
    anim.addAnimationFrame(img`
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 . . . . . . . 
        5 5 5 5 5 5 5 5 5 5 5 . . . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.setAction(mySprite, ActionKind.Walking)
})
function createEnemies () {
    clyde = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . 4 1 1 4 1 1 4 4 . . . . 
        . . . . 4 f 1 4 f 1 4 4 . . . . 
        . . . . 4 1 1 4 1 1 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . . 4 . 4 . 4 . 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(clyde, assets.tile`myTile`)
    clyde.follow(mySprite, 50)
    Pinky = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . 3 1 1 3 1 1 3 3 . . . . 
        . . . . 3 f 1 3 f 1 3 3 . . . . 
        . . . . 3 1 1 3 1 1 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 . 3 . 3 . 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Pinky, assets.tile`myTile`)
    Pinky.follow(mySprite, 50)
    Blinky = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . 2 1 1 2 1 1 2 2 . . . . 
        . . . . 2 f 1 2 f 1 2 2 . . . . 
        . . . . 2 1 1 2 1 1 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . 2 . 2 . 2 . 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Blinky, assets.tile`myTile`)
    Blinky.follow(mySprite, 50)
    Inky = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . 9 1 1 9 1 1 9 9 . . . . 
        . . . . 9 f 1 9 f 1 9 9 . . . . 
        . . . . 9 1 1 9 1 1 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 . 9 . 9 . 9 9 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Inky, assets.tile`myTile`)
    Inky.follow(mySprite, 50)
}
function createFood () {
    yumyum = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . d d d . . . . . . 
        . . . . . . . d d d . . . . . . 
        . . . . . . . d d d . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(yumyum, assets.tile`myTile`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (info.score() == 10) {
        game.over(true)
    } else {
        otherSprite.destroy()
        info.changeScoreBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (canEatEnemy == true) {
        otherSprite.destroy()
    } else {
        info.changeLifeBy(-1)
        tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
    }
})
let yumyum: Sprite = null
let Inky: Sprite = null
let Blinky: Sprite = null
let Pinky: Sprite = null
let clyde: Sprite = null
let canEatEnemy = false
let anim: animation.Animation = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    5 5 5 5 f 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . . . . 5 5 5 5 5 5 5 5 5 . 
    . . . . . 5 5 5 5 5 5 5 5 5 5 . 
    . . . . 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
scene.cameraFollowSprite(mySprite)
info.startCountdown(30)
for (let index = 0; index < 30; index++) {
    createFood()
}
let Power_Up = sprites.create(img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `, SpriteKind.yeet)
tiles.placeOnRandomTile(Power_Up, sprites.castle.tileGrass2)
createEnemies()
info.setLife(3)
