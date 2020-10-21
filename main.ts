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
    badguy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 f 1 1 f 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(badguy, sprites.castle.tileGrass2)
    badguy.follow(mySprite, 50)
}
function createFood () {
    yumyum = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(yumyum, sprites.castle.tileGrass2)
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
let badguy: Sprite = null
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
tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202020202010202020202010101010101020202020102020202020102020202010202010101010102020201020202020202020202020201020201010101020202020202020202010202020201010202020202020101010101010202020101010102020202020201020202020202010202020202020202010202020202020102020202020202010101010101010101010102020202020201020201020202010202020202020202010202010202020102020202020101010102020202020201020202020202020201020202020202020202020202020202010101010101020202020202020202020202020202020202020202`, img`
    . . . . . . . . . . . . . . . . 
    . . . 2 . . . . . 2 2 2 2 2 2 . 
    . . . 2 . . . . . 2 . . . . 2 . 
    . 2 2 2 2 2 . . . 2 . . . . . . 
    . . . . . 2 . . 2 2 2 2 . . . . 
    . . . . . 2 . . . . 2 2 . . . . 
    . . 2 2 2 2 2 2 . . . 2 2 2 2 . 
    . . . . . 2 . . . . . . 2 . . . 
    . . . . . 2 . . . . . . 2 . . . 
    . . . . 2 2 2 2 2 2 2 2 2 2 2 . 
    . . . . . 2 . . 2 . . . 2 . . . 
    . . . . . 2 . . 2 . . . 2 . . . 
    . . 2 2 2 2 . . . . . . 2 . . . 
    . . . . . 2 . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tileGrass2], TileScale.Sixteen))
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
for (let index = 0; index < 4; index++) {
    createEnemies()
}
info.setLife(3)
