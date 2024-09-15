$(".drum").click(function (trigger_event1){makeSound(this.innerHTML);
    btnAnimation(this.innerHTML);});
$(".drum").keydown(function(trigger_event2){makeSound(trigger_event2.key)
    btnAnimation(trigger_event2.key)});



// for(let i=0;i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function (trigger_event1){
//        makeSound(document.querySelectorAll(".drum")[i].innerHTML);
//        makeSound(this.innerHTML);
//        btnAnimation(this.innerHTML);
       
//     })
//     document.querySelectorAll(".drum")[i].addEventListener("keydown",function (trigger_event2){
//         makeSound(trigger_event2.key)
//         btnAnimation(trigger_event2.key)
//         })
// }
// document.addEventListener("keydown",function (trigger_event){
// makeSound(trigger_event.key)
// })
function makeSound(key){
    switch (key) {
        case "s":
            let audio_s=new Audio("sounds/crash.mp3");
            audio_s.play();
            break;
        case "a":
            let audio_a=new Audio("sounds/kick-bass.mp3");
            audio_a.play();
            break;
        case "d":
            let audio_d=new Audio("sounds/snare.mp3");
            audio_d.play();
            break;
        case "f":
            let audio_f=new Audio("sounds/tom-1.mp3");
            audio_f.play();
            break;
        case "j":
            let audio_j=new Audio("sounds/tom-2.mp3");
            audio_j.play();
            break;
        case "k":
            let audio_k=new Audio("sounds/tom-3.mp3");
            audio_k.play();
            break;
        case "l":
            let audio_l=new Audio("sounds/tom-4.mp3");
            audio_l.play();
            break;
       
        
        default:
            console.log("Invalid option");
            break;
    }
}
function btnAnimation(keys){
    let activebtn=document.querySelector("."+keys);
    activebtn.classList.add("pressed");
    setTimeout(function (){
        activebtn.classList.remove("pressed")
    },250)
}