var n= document.querySelectorAll(".drum").length;

// Detecting Button Press
for(var i=0;i<n;i++){
document.querySelectorAll("button")[i].addEventListener("click",function (){
   var btn1 = this.innerHTML;
   makeSound(btn1);
   buttonAnimation(btn1);
});
}

// Detecting Key Board Press

document.addEventListener("keydown",function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Function for  keys and their respective sounds
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
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
        default: alert("wrong key");
            break;
       }
}

// Button Animation Function

function buttonAnimation(key){
    var ab = document.querySelector("."+key);
    ab.classList.add("pressed");
    setTimeout(function() {
        ab.classList.remove("pressed");
        
    }, 100);
}