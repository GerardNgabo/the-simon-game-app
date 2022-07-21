const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0
if (started) {
    console.log("Game Started");
} else {
    $(document).keypress(function () {
        nextSequence();
        $("h1").text(`Level ${level}`)
    })
    started = true
}

console.log(started);


function nextSequence() {
    userClickedPattern = []
    level = level + 1
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour)
    makeSound(randomChosenColour)
    $("h1").text(`Level ${level}`)
    console.log(gamePattern);

}

function makeSound(color) {
    switch (color) {
        case "red":
            var audio = new Audio("./sounds/red.mp3");
            audio.play();
            break;
        case "blue":
            var audio = new Audio("./sounds/blue.mp3");
            audio.play();
            break;
        case "green":
            var audio = new Audio("./sounds/green.mp3");
            audio.play();
            break;
        case "yellow":
            var audio = new Audio("./sounds/yellow.mp3");
            audio.play();
            break;
        case "red":
            var audio = new Audio("./sounds/red.mp3");
            audio.play();
            break;
        case "red":
            var audio = new Audio("./sounds/red.mp3");
            audio.play();
            break;

        default:
            var audio = new Audio("./sounds/wrong.mp3");
            audio.play();
            break;
    }
}

$(".btn").click(function (e) {
    var userChosenColour = $(this).attr("id")
    makeSound(userChosenColour)
    animatePress(userChosenColour)
    userClickedPattern.push(userChosenColour)
    checkAnswer(userClickedPattern.length-1)
    console.log(userClickedPattern);
})

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 200);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (gamePattern[currentLevel] !== (userClickedPattern.length-1)) {
            console.log("Go On");
            setTimeout(function () {
                nextSequence()
            },1000)
        }else {
            console.log("Stop");
        }
    } else {
        console.log("Fail");
    }
}