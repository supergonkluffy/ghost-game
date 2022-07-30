sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.spooky.play()
    game.over(false, effects.confetti)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 8 8 8 8 8 8 6 6 f . . 
        . . f 6 8 f f f f f f 8 6 f . . 
        . . f f f f 6 6 6 6 f f f f . . 
        . f f 6 f b f 9 9 f b f 6 f f . 
        . f 6 6 9 1 f d d f 1 9 6 6 f . 
        . . f 6 6 d d d d d d 6 6 f . . 
        . . . f 6 6 9 9 9 9 6 6 f . . . 
        . . 6 9 f 8 8 8 8 8 8 f 9 6 . . 
        . . 9 d f 8 8 8 8 8 8 f d 9 . . 
        . . 9 9 f 9 9 7 7 9 9 f 9 9 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 8 8 8 8 8 8 6 6 f . . 
        . f f 6 8 f f f f f f 8 6 f f . 
        . f f f f f 6 6 6 6 f f f f f . 
        . . f 6 f b f 9 9 f b f 6 f . . 
        . . f 6 9 1 f d d f 1 9 6 f . . 
        . . . f 6 9 d d d d 9 6 f 6 . . 
        . . f 6 f 8 8 8 8 6 d d 9 6 . . 
        . . 6 9 f 8 8 8 8 6 d d 6 . . . 
        . . . . f 9 9 7 7 f 6 6 . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 8 8 8 8 8 8 6 6 f . . 
        . . f 6 8 f f f f f f 8 6 f . . 
        . . f f f f 6 6 6 6 f f f f . . 
        . f f 6 f b f 9 9 f b f 6 f f . 
        . f 6 6 9 1 f d d f 1 9 6 6 f . 
        . . f 6 6 d d d d d d 6 6 f . . 
        . . . f 6 6 9 9 9 9 6 6 f . . . 
        . . 6 9 f 8 8 8 8 8 8 f 9 6 . . 
        . . 9 d f 8 8 8 8 8 8 f d 9 . . 
        . . 9 9 f 9 9 7 7 9 9 f 9 9 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f 6 6 8 8 8 8 8 8 6 f f . . 
        . f f 6 8 f f f f f f 8 6 f f . 
        . f f f f f 6 6 6 6 f f f f f . 
        . . f 6 f b f 9 9 f b f 6 f . . 
        . . f 6 9 1 f d d f 1 9 6 f . . 
        . . 6 f 6 9 d d d d 9 6 f . . . 
        . . 6 9 d d 6 8 8 8 8 f 6 f . . 
        . . . 6 d d 6 8 8 8 8 f 9 6 . . 
        . . . . 6 6 f 7 7 9 9 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ........................
        ....ffffff..............
        ..ff6666f8f.............
        .ff6666f888f............
        .f666ff6666f...cc.......
        .ffff6688886f.cdc.......
        .f6888ffff68fcddc.......
        fffffff666ffcddc........
        ff6996bf996cddc.........
        f669d91fdd6cdc..........
        .f6669ddd6dccc..........
        ..ff669969dd6...........
        ...f88889966............
        ...f888868f.............
        ...f999977f.............
        ....ffffff..............
        .....fff................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        .......fff..............
        ....fffff8f.............
        ..ff6666688ff...........
        .ff666666888ff..........
        .f6666fff6666f..........
        .fffff66688886f.........
        fff6888fffff68f.........
        fffffffff666fff.....cc..
        f6f6996bbf9966f...ccdc..
        .f669d9bbfdd6f..ccddcc..
        ..f6669dddddf66cdddc....
        ...f888888866ddcdcc.....
        ...f999997699ddccc......
        ...ffffffff6666.........
        ...fff...ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        .......ff...............
        ....ffff8ff.............
        ..ff6666f8ff............
        .ff66666f88ff...........
        .f6666ff6666f...........
        .fffff6688886f..........
        fff6888ffff68f..........
        ffffffff666fff..........
        f6f6996bf9966f..........
        .f669d9bfdd6f...........
        ..f6669ddd66.c..........
        ...f888866dd6ccccccc....
        ...f999699dd6cddddd.....
        ...fffff6666.ccccc......
        ..ffffffff...c..........
        ..fff..ff...............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ....ffffff..............
        ..ff6666f8f.............
        .ff6666f888f............
        .f666ff6666f............
        .ffff6688886f...........
        .f6888ffff68f...........
        fffffff666fff...........
        ff6996bf9966f...........
        f669d91fdd6f............
        .f6669ddddf.............
        ..fdd69996f.............
        ..fdd688ccc.............
        ...66f88cdc.............
        ...f9999cddc............
        ....fffffcddc...........
        .....fff..cddc..........
        ...........cdc..........
        ............cc..........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 6 6 6 6 f f . . . . 
        . . . f 6 6 6 f f 6 6 6 f . . . 
        . . f f f f f 8 8 f f f f f . . 
        . . f f 6 8 6 8 8 6 8 6 f f . . 
        . . f 6 8 f 8 f f 8 f 8 6 f . . 
        . . f f f 8 8 6 6 8 8 f f f . . 
        . f f 6 f 8 f 6 6 f 8 f 6 f f . 
        . f 6 6 f f 6 6 6 6 f 6 6 6 f . 
        . . f 6 6 6 6 6 6 6 6 6 6 f . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . 6 9 f f f f f f f f 9 6 . . 
        . . 9 d f 8 8 8 8 8 8 f d 9 . . 
        . . 9 9 f 9 9 9 9 9 9 f 9 9 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 6 6 6 6 f f . . . . 
        . . . f 6 6 6 f f 6 6 6 f . . . 
        . . . f f f f 8 8 f f f f . . . 
        . . f f 6 8 6 8 8 6 8 6 f f . . 
        . . f 6 8 f 8 f f f 8 f 6 f . . 
        . . f f f 8 f 6 6 8 8 f f f . . 
        . . f 6 8 f f 6 6 8 f 6 6 f . . 
        . f f 6 f f 6 6 6 f 6 6 6 f f . 
        . f f 6 6 6 6 6 6 6 6 6 6 f f . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . 6 f f f f f f f f 9 6 . . 
        . . . 9 f 8 8 8 8 8 6 d d 9 . . 
        . . . 6 f f f f f f 6 6 9 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 6 6 6 6 f f . . . . 
        . . . f 6 6 6 f f 6 6 6 f . . . 
        . . f f f f f 8 8 f f f f f . . 
        . . f f 6 8 6 8 8 6 8 6 f f . . 
        . . f 6 8 f 8 f f 8 f 8 6 f . . 
        . . f f f 8 8 6 6 8 8 f f f . . 
        . f f 6 f 8 f 6 6 f 8 f 6 f f . 
        . f 6 6 f f 6 6 6 6 f 6 6 6 f . 
        . . f 6 6 6 6 6 6 6 6 6 6 f . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . 6 9 f f f f f f f f 9 6 . . 
        . . 9 d f 8 8 8 8 8 8 f d 9 . . 
        . . 9 9 f 9 9 9 9 9 9 f 9 9 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 6 6 6 6 f f . . . . 
        . . . f 6 6 6 f f 6 6 6 f . . . 
        . . . f f f f 8 8 f f f f . . . 
        . . f f 6 8 6 8 8 6 8 6 f f . . 
        . . f 6 f 8 f f f 8 f 8 6 f . . 
        . . f f f 8 8 6 6 f 8 f f f . . 
        . . f 6 6 f 8 6 6 f f 8 6 f . . 
        . f f 6 6 6 f 6 6 6 f f 6 f f . 
        . f f 6 6 6 6 6 6 6 6 6 6 f f . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . 6 9 f f f f f f f f 6 . . . 
        . . 9 d d 6 8 8 8 8 8 f 9 . . . 
        . . . 9 6 6 f f f f f f 6 . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.beamUp.play()
    game.over(true, effects.confetti)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 8 f 6 6 6 6 f f . . . . 
        . . f 8 8 8 f 6 6 6 6 f f . . . 
        . . f 6 6 6 6 f f 6 6 6 f . . . 
        . f 6 8 8 8 8 6 6 f f f f . . . 
        . f 8 6 f f f f 8 8 8 6 f . . . 
        . f f f 6 6 6 f f f f f f f . . 
        . f 6 6 9 9 f b 6 9 9 6 f f . . 
        . . f 6 d d f 1 9 d 9 6 6 f . . 
        . . . f d d d d 9 6 6 6 f . . . 
        . . . f 6 9 9 9 6 6 f f . . . . 
        . . . f 8 8 8 6 d d 9 . . . . . 
        . . . f 8 8 8 6 d d 6 . . . . . 
        . . . f 7 7 9 f 6 6 f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 8 f 6 6 6 6 f f . . . . 
        . . f 8 8 8 f 6 6 6 6 f f . . . 
        . . f 6 6 6 6 f f 6 6 6 f . . . 
        . f 6 8 8 8 8 6 6 f f f f . . . 
        . f 8 6 f f f f 8 8 8 6 f . . . 
        . f f f 6 6 6 f f f f f f f . . 
        . f 6 6 9 9 f b 6 9 9 6 f f . . 
        . . f 6 d d f 1 9 d 9 6 6 f . . 
        . . . f d d d 6 6 6 6 6 f . . . 
        . . . f 6 9 6 d d 9 f . . . . . 
        . . . f 8 8 6 d d 6 f . . . . . 
        . . f f 7 7 f 6 6 f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 8 f 6 6 6 6 f f . . . . 
        . . f 8 8 8 f 6 6 6 6 f f . . . 
        . . f 6 6 6 6 f f 6 6 6 f . . . 
        . f 6 8 8 8 8 6 6 f f f f . . . 
        . f 6 6 f f f f 8 8 8 6 f . . . 
        . f f f 6 6 6 f f f f f f f . . 
        . f 6 6 9 9 f b 6 9 9 6 f f . . 
        . . f 6 d d f 1 9 d 9 6 6 f . . 
        . . . f d d d d 9 6 6 6 f . . . 
        . . . f 6 9 9 9 6 6 f f . . . . 
        . . . f 8 8 8 6 d d 9 . . . . . 
        . . . f 8 8 8 6 d d 6 . . . . . 
        . . . f 7 7 9 f 6 6 f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 8 f 6 6 6 6 f f . . . . 
        . . f 8 8 8 f 6 6 6 6 f f . . . 
        . . f 6 6 6 6 f f 6 6 6 f . . . 
        . f 6 8 8 8 8 6 6 f f f f . . . 
        . f 8 6 f f f f 8 8 8 6 f . . . 
        . f f f 6 6 6 f f f f f f f . . 
        . f 6 6 9 9 f b 6 9 9 6 f f . . 
        . . f 6 d d f 1 9 d 9 6 6 f . . 
        . . . f d d d d 9 6 6 6 f . . . 
        . . . f 6 9 9 9 6 d d 9 . . . . 
        . . . f 8 8 8 8 6 d d 6 . . . . 
        . . f f 7 7 9 9 f 6 6 f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f 6 6 6 6 f 8 f . . . 
        . . . f f 6 6 6 6 f 8 8 8 f . . 
        . . . f 6 6 6 f f 6 6 6 6 f . . 
        . . . f f f f 6 6 8 8 8 8 6 f . 
        . . . f 6 8 8 8 f f f f 6 8 f . 
        . . f f f f f f f 6 6 6 f f f . 
        . . f f 6 9 9 6 b f 9 9 6 6 f . 
        . . f 6 6 9 d 9 1 f d d 6 f . . 
        . . . f 6 6 6 9 d d d d f . . . 
        . . . . f f 6 6 9 9 9 6 f . . . 
        . . . . . 9 d d 6 8 8 8 f . . . 
        . . . . . 6 d d 6 8 8 8 f . . . 
        . . . . . f 6 6 f 9 7 7 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f 6 6 6 6 f 8 f . . . 
        . . . f f 6 6 6 6 f 8 8 8 f . . 
        . . . f 6 6 6 f f 6 6 6 6 f . . 
        . . . f f f f 6 6 8 8 8 8 6 f . 
        . . . f 6 8 8 8 f f f f 6 8 f . 
        . . f f f f f f f 6 6 6 f f f . 
        . . f f 6 9 9 6 b f 9 9 6 6 f . 
        . . f 6 6 9 d 9 1 f d d 6 f . . 
        . . . f 6 6 6 6 6 d d d f . . . 
        . . . . . f 9 d d 6 9 6 f . . . 
        . . . . . f 6 d d 6 8 8 f . . . 
        . . . . f f f 6 6 f 7 7 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f 6 6 6 6 f 8 f . . . 
        . . . f f 6 6 6 6 f 8 8 8 f . . 
        . . . f 6 6 6 f f 6 6 6 6 f . . 
        . . . f f f f 6 6 8 8 8 8 6 f . 
        . . . f 6 8 8 8 f f f f 6 8 f . 
        . . f f f f f f f 6 6 6 f f f . 
        . . f f 6 9 9 6 b f 9 9 6 6 f . 
        . . f 6 6 9 d 9 1 f d d 6 f . . 
        . . . f 6 6 6 9 d d d d f . . . 
        . . . . f f 6 6 9 9 9 6 f . . . 
        . . . . . 9 d d 6 8 8 8 f . . . 
        . . . . . 6 d d 6 8 8 8 f . . . 
        . . . . . f 6 6 f 9 7 7 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f 6 6 6 6 f 8 f . . . 
        . . . f f 6 6 6 6 f 8 8 8 f . . 
        . . . f 6 6 6 f f 6 6 6 6 f . . 
        . . . f f f f 6 6 8 8 8 8 6 f . 
        . . . f 6 8 8 8 f f f f 6 8 f . 
        . . f f f f f f f 6 6 6 f f f . 
        . . f f 6 9 9 6 b f 9 9 6 6 f . 
        . . f 6 6 9 d 9 1 f d d 6 f . . 
        . . . f 6 6 6 9 d d d d f . . . 
        . . . . 9 d d 6 9 9 9 6 f . . . 
        . . . . 6 d d 6 8 8 8 8 f . . . 
        . . . . f 6 6 f 9 9 7 7 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    true
    )
})
function newLevel () {
    info.setScore(0)
    levNum += 1
    if (levNum == 2) {
        game.splash("You are almost done!", "Now, Skelly is faster!")
        mySprite3.follow(mySprite, 75)
        scene.setBackgroundImage(img`
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddddd55555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454dddddddddddddddddddddd454dddddddddddddddddddddddddddd5555555555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddd555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454dddddddddddddddddddddd454dddddddddddddddddddddddddd555555555555555dd5555555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454dddddddddddddddddddddd454dddddddddddddddd555555ddd55555ddd5555555dd555dd5555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddd555555555d5555dd5dd555555d555dddd5555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454dddddddddddddddddddddd454dddddddddddddd555555555dd555d5555dd55555d55dd55d55555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454dddddddddddddddddddddd454dddddddddddddd5555d5555dd555dd555dd55555d555555d555555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454ddddddddddddddddddddd4444dddddddddddddd55dddd555dd55555555dd55555d555555d5555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454ddddddddddddddddddd44555544dddddddddddd55555dd555dd5555555d555555ddd555dd5555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454ddddddddddddddd4444444dd4444444dddd555dd5555d55555ddddddddd5555555dddddd55555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454dddddddddddddd455555d4444d555554dd55555ddd5dd55555555ddddd5555555555555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454ddddddddddddcc4d55555555555555d4cc555555dddd55555555555555555555555555555555555555d5555ddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454dddddddddddcc22445555555555554422cc55555555555555555555555555555555555555555555555555555555ddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddd454ddddddddddcc2222222222222222222222cc555555555555555555555555555555555555555555555555555555dddddddddddddd55555ddddddddddddddddddddddddddddd
            ddddddddddddddddddd454dddddddddcc222442222222242222224422cc555555555555555555555555555555555555555555555555555555555555555ddd5555555dddddddddddddddddddddddddddd
            ddddddddddddddddddd454ddddddddac22244222242222422222224222ca55555555555555555555555555555555555555555555555555555ddddddddddd55555555dddddddddddddddddddddddddddd
            dddddddddddddddddd4444dddddddda2224422224422224222242224222adddddd5555ddddd555555555555555ddddddddddddddddddddddddddddddddd5555ddd55dd555ddddddddddddddddddddddd
            dddddddddddddddd44555544dddddaa2244222224222224222244222422aadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555dd5d55d555555ddddddddddddddddddddd
            dddddddddddd4444444dd4444444da222442222442222242222242224222ad11111111111111111111111111111111111111111111111ddddddddddd55dd5555dd55dd555d55dddddddddddddddddddd
            ddddddddddd455555d4444d555554a224422222442222242222242224222a1111111111111111111111111111111111111111111111111111ddddd55555dddddd5555ddddd555ddddddddddddddddddd
            dddddddddcc4d55555555555555d4cc24422222422222242222244224422a111111111111111111111111111111111111111111111dddddddddddd5555555ddd55555555555555dddddddddddddddddd
            ddddddddcc22445555555555554422cc4422222422222242222244224422a11111111111111111111111111111111111111111ddddddddd5555555555555555555555555555555555555555ddddddddd
            dddddddcc2222222222222222222222cc422224422222242222244224422a11111111111111111111111111111111111111111111111dddddddd5555555555555555555555555555555555555ddddddd
            ddddddcc222442222222242222224422cc22224422222242222244224422a1111111111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddd
            dddddac22244222242222522222225422ca2224422222242222244224422a11111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddddddddddddddddddd
            ddddda2224522224422225222242245222a2224422222242222244224422a1111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddddddddddddddd
            ddddaa2245422224222225222244225422aa22442222224222224422422a1111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddddddddddddd
            dddda222552222442222252222242255222a22442222224222224424422a11111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddddddddddd
            dddda224542222442222252222242245222a2224222224422222422422c1111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddddddddddd
            dddda224522222422222252222244225422a222422222442222442422c111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddddddddd
            dddda224522222422222252222244225422a4422422224222224444cc11111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddddddddd
            dddda224422224422222252222244224422acc22242244222244cccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddddddd
            dddda224422224422222242222244224422ac1cccccccccccccc11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddddddd
            dddda224422224422222242222244224422a11114444555d4111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddddddd
            dddda224422224422222242222244224422a1111144444441111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddddddd
            ddddda2244222442222224222224422422a111111144444111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddddd
            ddddda2244222442222224222224424422a11111114d5d4111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddddd
            ddddddc22442224222224422222422422c1111111145554111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddddd
            dddddddc244222422222442222442422c1111111114d5d41111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddddd
            ddddddddcc44422422224222224444cc1111111111433341111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddddd
            dddddddddcccc22242244222244cccc111111111114d4d41111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddddd
            dddddddddddd1cccccccccccccc1111111111111114d4d411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddd
            dddddddddddd1114444555d41111111111111111114d3d411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddd
            dddddddddddd1111444444411111111111111111114ddd411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddd
            dddddddddddd1111144444111111111111111111114555411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddd
            dddddddddddd111114d5d41111111111111111111145554111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddd
            ddddddddddd111111455541111111111111111111145d54111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddd
            ddddddddddd1111114d5d41111111111111111111145d54111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddd
            ddddddddddd111111133341111111111111111111145d54111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddd
            ddddddddddd1111111d4d41111111111111111111145d541111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddd
            ddddddddddd1111111d4d411111111111111111111454541111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddd
            ddddddddddd1111114d3d411111111111111111111454541111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddd
            ddddddddddd1111114ddd411111111111111111111454541111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddd
            ddddddddddd1111114555411111111111111111111454d41111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddd
            ddddddddddd1111114555411111111111111111111444d41111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddd
            ddddddddddd11111145d5411111111111111111111111441111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddd
            ddddddddddd11111145d54111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            ddddddddddd11111145d54111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            ddddddddddd11111145d54111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            ddddddddddd11111145454111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            ddddddddddd11111145454111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            ddddddddddd11111145454111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            ddddddddddd111111454d4111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            ddddddddddd111111444d4111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            ddddddddddd11111111144111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            dddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            dddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            dddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            dddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            dddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            ddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            ddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            ddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            ddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            ddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            dddddddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd
            dddddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddd
            dddddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddd
            dddddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddd
            dddddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddd
            ddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111133333333331111111111111111111111ddddddddddddd
            ddddddddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111113333d5555555d4441111111111111111111ddddddddddddd
            ddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111113335555dddddd555553311111111111111111ddddddddddddd
            ddddddddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111113555ddddd55555dddd55541111111111111111ddddddddddddd
            dddddddddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111355dd555d5555555d55dd5d4111111111111111ddddddddddddd
            dddddddddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111113d5d55555d555ddddd555dd5411111111111111dddddddddddddd
            dddddddddddddddd11111111111111111111111111111111111111111111dddddddd11111111111111111111111111111111111111135dd55555d3dddd3dd5555d5541111111111111dddddddddddddd
            ddddddddddddddddd11111111111111111111111111111111111111111ddd5555555dd1111111111111111111111111111111111113d5dd5555d3dddddd3d5555d5541111111111111dddddddddddddd
            dddddddddddddddddd111111111111111111111111111111111111111dd5555555555dd11111111111111111111111111111111111455ddddddd33dddd33d555dd5541111111111111dddddddddddddd
            dddddddddddddddddd11111111111111111111111111111111111111dd555555555555dd1111111111111111111111111111111111455dd555555333333ddddddd55b1111111111111dddddddddddddd
            ddddddddddddddddddd1111ddddddd11111111111111111111111111dd55555555555ddddd11111111111111111111111111111111455dd55555555d55555555dd5bb113333333333ddddddddddddddd
            ddddddddddddddddddddddddddddddddd1111111111111111111111ddd555ddd5555dd555ddd1111111111111111111111111111114d55ddd5555ddd5555555dd55b3333d5555555d444dddddddddddd
            ddddddddddddddddddddddd55555555ddd11111111111111111111dddd555d5dd555d555555dd111111111111111111111111111114455555dddddddd55555dd553335555dddddd5555533dddddddddd
            dddddddddddddddddddd5555555555555dd111111111111111ddddddddd555ddd555d5555555dd11111111111111111111111111111b4d555555555ddddddd5553555ddddd55555dddd5554ddddddddd
            ddddddddddddddddddd555555555555555dd11ddddddd11dddd5555555dddddd5555d5555555ddd1111111111111111111111111111b34dddd5555555555555d355dd555d5555555d55dd5d4dddddddd
            dddddddddddddddddd555555dd555555555ddd555555ddddd5555555555555555555d555d555ddddd111111111111111111111111113333333333ddddddddd53d5d55555d555ddddd555dd54dddddddd
            ddddddddddddddddd555555ddddd555555ddd555555555ddddddddddd55555555555dd55dd55d5555ddd111111111111111111113333d5555555d444555d55535dd55555d3dddd3dd5555d554ddddddd
            ddddddddddddddddd55555dd55ddd55555ddd5555555555ddddddddddd55555555555dddd555555555ddd111111111111111113335555dddddd5555533d5553d5dd5555d3dddddd3d5555d554ddddddd
            dddddddddddddddd555555dd555dd55555dd5555ddd5555dddddddddddd555555555555555555555555dddd111111111111113555ddddd55555dddd5554ddd455ddddddd33dddd33d555dd554ddddddd
            dddddddddddddddd555555dddd5dd55555dd555ddddd555dd5555dddddd55555555555555555555555ddd55ddddddddddddd355dd555d5555555d55dd5d4dd455dd555555333333ddddddd55bddddddd
            ddddddddd55555dd5555555dd55dd55555dd555555dd5555555555ddddd555555555555555555555555555555dddddddddd3d5d55555d555ddddd555dd54d3455dd55555555d55555555dd5bbddddddd
            dddddddd5555555dd555555555dd5555555dd55555dd55555555555dddd555555555555555555555555555555dddddddddd35dd55555d3dddd3dd5555d554e4d55ddd5555ddd5555555dd55bbddddddd
            ddddddd55555555dddd55555ddd555555555ddddddd555555d55555dddd555555555555555555555555555555555555ddd3d5dd5555d3dddddd3d5555d554d4455555dddddddd55555dd55d3bddddddd
            ddddddd5555ddd555ddddddddd555555555555dddd55555555d5555ddddddddddddddddddddddddddddddddddddddddddd455ddddddd33dddd33d555dd554ddb4d555555555ddddddd555d33bddddddd
            ddddddd555ddddd55555ddd555555555555555555555555555dd55dddddddddddddddddddddddddddddddddddddddddddd455dd555555333333ddddddd55bddb34dddd5555555555555dd533bddddddd
            ddddddd555d55dd555555555555555ddd555555555555555555dddd55555dddddddddddddddddddddddddddddddddddddd455dd55555555d55555555dd5bbdde3355dddddddddddddd5d55b3bddddddd
            dddddddd55555dd5555555555555dddddd555555555555555555dd555555dddddddddddddddddddddddddddddddddddddd4d55ddd5555ddd5555555dd55bbdde33d55d5555dd555d555333b3bddddddd
            dddddd5dd555dd5555555555555dd555ddd55555555555555555555555555555dddddddddddddddddddddddddddddddddd4455555dddddddd55555dd55d3bddde3ddd3d553d555d555d333bb3ddddddd
            dddddd55ddddd55555555555555d55555555555555555555555555555555555555dddddddddddddddddddddddddddddddddb4d555555555ddddddd555d33bddde43dd3ddd3dddd3ddddb3bbddddddddd
            dddddd555555555555555555555d55555555555555555555555555555555555555555555555ddddddddddddddddddddddddb34dddd5555555555555dd533bddde444b3ddd44ddd3ddd3bbb3ddddddddd
            ddddddd55555555555555555555ddddd55555555555555555555555555555555555555ddddddddddddddddddddddddddddde3355dddddddddddddd5d55b3bdddd444bbdddb4ddd4dd3ee3ddddddddddd
            ddddddddd55555555555555555555ddddddddddddddddddddd555555ddddddddddddddddddddddddddddddddddddddddddde33d55d5555dd555d555333b3bddddddd4e33dbbdd4444eeddddddddddddd
            `)
        tiles.setCurrentTilemap(tilemap`level3`)
        mySprite4 = sprites.create(img`
            . . . . . b b b b b b . . . . . 
            . . . b b 9 9 9 9 9 9 b b . . . 
            . . b b 9 9 9 9 9 9 9 9 b b . . 
            . b b 9 d 9 9 9 9 9 9 9 9 b b . 
            . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
            b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
            b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
            b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
            b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
            b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
            b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
            . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
            . b d 5 3 3 3 3 3 3 3 d 5 b b . 
            . . b d 5 d 3 3 3 3 5 5 b b . . 
            . . . b b 5 5 5 5 5 5 b b . . . 
            . . . . . b b b b b b . . . . . 
            `, SpriteKind.Projectile)
        mySprite4.setPosition(150, 105)
        animation.runImageAnimation(
        mySprite4,
        [img`
            . . . . . b b b b b b . . . . . 
            . . . b b 9 9 9 9 9 9 b b . . . 
            . . b b 9 9 9 9 9 9 9 9 b b . . 
            . b b 9 d 9 9 9 9 9 9 9 9 b b . 
            . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
            b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
            b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
            b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
            b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
            b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
            b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
            . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
            . b d 5 3 3 3 3 3 3 3 d 5 b b . 
            . . b d 5 d 3 3 3 3 5 5 b b . . 
            . . . b b 5 5 5 5 5 5 b b . . . 
            . . . . . b b b b b b . . . . . 
            `,img`
            . . . . . . . . b b . . . . . . 
            . . . . . . . b 9 1 b . . . . . 
            . . b b . . . b 9 9 b . . . . . 
            . b 9 1 b . . b b b . . b b b . 
            . b 3 9 b . b b b b . b 9 9 1 b 
            . b b b b b 9 9 1 1 b b 3 9 9 b 
            . . . . b 9 d 9 1 1 b b b b b . 
            . . . . b 5 3 9 9 9 b . . . . . 
            . . b b b 5 3 3 d 9 b . . . . . 
            . b 5 1 b b 5 5 9 b b b b . . . 
            . b 5 5 b b b b b b 3 9 9 3 . . 
            . b b b b b b b . b 9 1 1 9 b . 
            . . . b 5 5 1 b . b 9 1 1 9 b . 
            . . . b 5 5 5 b . b 3 9 9 3 b . 
            . . . . b b b . . . b b b b . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b b . . . . . 
            . . . . . . . . b 9 1 b . . . . 
            . . . b b b b b b 9 9 b . . . . 
            . . b 9 9 d 9 9 1 1 d b b b b . 
            . . . b d 9 9 9 1 1 9 9 d 9 1 b 
            . . b 9 d 9 9 9 9 9 9 9 d 9 9 b 
            . . b 9 3 3 9 9 9 9 9 d b b b . 
            . b 5 d 9 3 3 3 d d b b b b . . 
            b 5 5 5 b b b b b b b 9 9 1 b . 
            b 5 5 b . . . . . . b 3 9 9 b . 
            . b b . . . . . . . . b b b . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 1 1 1 . . . 
            . . . 1 1 . . . . . 1 1 1 . . . 
            . . . 1 1 . . 1 1 . 1 1 1 . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 1 . . . . 
            . . . . 1 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ..............ffffff....
        .............f8f6666ff..
        ............f888f6666ff.
        .......cc...f6666ff666f.
        .......cdc.f6888866ffff.
        .......cddcf86ffff8886f.
        ........cddcff666fffffff
        .........cddc699fb6996ff
        ..........cdc6ddf19d966f
        ..........cccd6ddd9666f.
        ...........6dd969966ff..
        ............66998888f...
        .............f868888f...
        .............f779999f...
        ..............ffffff....
        ................fff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ..............fff.......
        .............f8fffff....
        ...........ff8866666ff..
        ..........ff888666666ff.
        ..........f6666fff6666f.
        .........f68888666fffff.
        .........f86fffff8886fff
        ..cc.....fff666fffffffff
        ..cdcc...f6699fbb6996f6f
        ..ccddcc..f6ddfbb9d966f.
        ....cdddc66fddddd9666f..
        .....ccdcdd668888888f...
        ......cccdd996799999f...
        .........6666ffffffff...
        .............ff...fff...
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ...............ff.......
        .............ff8ffff....
        ............ff8f6666ff..
        ...........ff88f66666ff.
        ...........f6666ff6666f.
        ..........f6888866fffff.
        ..........f86ffff8886fff
        ..........fff666ffffffff
        ..........f6699fb6996f6f
        ...........f6ddfb9d966f.
        ..........c.66ddd9666f..
        ....ccccccc6dd668888f...
        .....dddddc6dd996999f...
        ......ccccc.6666fffff...
        ..........c...ffffffff..
        ...............ff..fff..
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ..............ffffff....
        .............f8f6666ff..
        ............f888f6666ff.
        ............f6666ff666f.
        ...........f6888866ffff.
        ...........f86ffff8886f.
        ...........fff666fffffff
        ...........f6699fb6996ff
        ............f6ddf19d966f
        .............fdddd9666f.
        .............f69996ddf..
        .............ccc886ddf..
        .............cdc88f66...
        ............cddc9999f...
        ...........cddcfffff....
        ..........cddc..fff.....
        ..........cdc...........
        ..........cc............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    mySprite2.setPosition(randint(33, 70), randint(40, 97))
})
// CONCEPT
// What’s a simple 1-2 sentence way to describe your game?
// It's a spooky and fast-paced game!
// 
// FEATURES
// List some of your game’s features!
// -Levels
// -Animation
// -Splash Screens
// -Background Images
// -Tilemaps
// 
// GENERAL INFORMATION
// What else do you want us to know about your game?
// It's a chase between a scared person (Timmy) and a grumpy skeleton ghost-like creature (Skelly).
// 
// GAMEPLAY
// How does your gameplay? What are the mechanics?
// The game plays by using the D-Pad, WASD keys, or arrow keys to move the character (Timmy) while trying to escape from the annoyed enemy (Skelly). There are 2 levels: the beginning level and the end level.
// 
// STORY
// Does your game have a story?
// One day, a boy named Timmy was exploring the woods and then found a castle. (How convenient!) He went in and explored until he found a small mysterious room. He went in but regretted it when the door (magically) vanished and was greeted (kinda) by a skeleton ghost-like creature named Skelly. He was so annoyed that started chasing Timmy to scare him silly. 
// 
// GAME WORLD
// What’s your game world like?
// On level 1, it is we have nothing but these *magic coins*. Collect 10 of these mysterious coins and you move on to the next level. On level 2, you have 2 choices; Get more coins just because or get out of there and use the *magic bubble* to get out of there and win the game. You also have to deal with Skelly being faster!
// 
// TECHNICAL ANALYSIS
// Do you have anything to add about the challenges of developing your game?
// The challenges of creating the game animating the custom colors of Jimmy, placing the coins randomly because used the wrong sprite instead of the coins, and figuring out what to do with the 2nd (end) level.
// 
// 
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let levNum = 0
levNum = 1
game.splash("Press A to get good luck", "or I will eat your cookie.")
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 8 8 f f f . . . . 
    . . . f f f 8 8 8 8 f f f . . . 
    . . f f f 6 6 6 6 6 6 f f f . . 
    . . f f 6 8 8 8 8 8 8 6 6 f . . 
    . . f 6 8 f f f f f f 8 6 f . . 
    . . f f f f 6 6 6 6 f f f f . . 
    . f f 6 f b f 9 9 f b f 6 f f . 
    . f 6 6 9 1 f d d f 1 9 6 6 f . 
    . . f 6 6 d d d d d d 6 6 f . . 
    . . . f 6 6 9 9 9 9 6 6 f . . . 
    . . 6 9 f 8 8 8 8 8 8 f 9 6 . . 
    . . 9 d f 8 8 8 8 8 8 f d 9 . . 
    . . 9 9 f 9 9 7 7 9 9 f 9 9 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(12, 12)
controller.moveSprite(mySprite, 100, 100)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite2 = sprites.create(img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `, SpriteKind.Food)
mySprite3 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
mySprite3.follow(mySprite, 50)
animation.runImageAnimation(
mySprite2,
[img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `,img`
    . . b b b . . . 
    . b 5 5 5 b . . 
    b 5 d 3 d 5 b . 
    b 5 3 5 1 5 b . 
    c 5 3 5 1 d c . 
    c 5 d 1 d d c . 
    . f d d d f . . 
    . . f f f . . . 
    `,img`
    . . . b b . . . 
    . . b 5 5 b . . 
    . b 5 d 1 5 b . 
    . b 5 3 1 5 b . 
    . c 5 3 1 d c . 
    . c 5 1 d d c . 
    . . f d d f . . 
    . . . f f . . . 
    `,img`
    . . . b b . . . 
    . . b 5 5 b . . 
    . . b 1 1 b . . 
    . . b 5 5 b . . 
    . . b d d b . . 
    . . c d d c . . 
    . . c 3 3 c . . 
    . . . f f . . . 
    `,img`
    . . . b b . . . 
    . . b 5 5 b . . 
    . b 5 1 d 5 b . 
    . b 5 1 3 5 b . 
    . c d 1 3 5 c . 
    . c d d 1 5 c . 
    . . f d d f . . 
    . . . f f . . . 
    `,img`
    . . . b b b . . 
    . . b 5 5 5 b . 
    . b 5 d 3 d 5 b 
    . b 5 1 5 3 5 b 
    . c d 1 5 3 5 c 
    . c d d 1 d 5 c 
    . . f d d d f . 
    . . . f f f . . 
    `],
200,
true
)
animation.runImageAnimation(
mySprite3,
[img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .....ffff111111bf.......
    ....fc111cdb1bdfff......
    ....f1b1bcbfbfc111cf....
    ....fbfbfbffff1b1b1f....
    .........fffffffbfbf....
    ..........fffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `],
200,
true
)
forever(function () {
    if (info.score() == 10) {
        newLevel()
    }
})
forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
