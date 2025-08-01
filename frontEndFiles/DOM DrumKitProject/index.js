// const buttons = document.querySelectorAll("button");

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function () {
//         alert("Button " + (i + 1) + " clicked!");
//     });
// }

// Detecting button clicks and playing sounds
var numberOfDrums = document.querySelectorAll(".drum").length;
for ( var i = 0; i<numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // switch statement to determine which button was clicked
        // and play the corresponding sound
         // this refers to the button that was clicked
         // this.innerHTML gives the inner HTML of the button
       var buttonInnerHTML = this.innerHTML;
       makeSound(buttonInnerHTML);

       buttonAnimation(buttonInnerHTML);

    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    // event.key gives the key that was pressed

    buttonAnimation(event.key);
})

function makeSound(key) {
    // switch statement to determine which key was pressed
    // and play the corresponding sound
    switch (key) {
        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case "a":
        var tom2 = new Audio("Sounds/tom-2.mp3");
        tom2.play();
        break;
        case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
        case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
        case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
        default:
        console.log(key);
        break;
    }
}

function buttonAnimation(currentKey) {
    // adding animation to the button that was pressed
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    // removing the animation after 100 milliseconds
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}
