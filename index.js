
for(var i=0;i<document.querySelectorAll('button').length;i++)
{
document.querySelectorAll('.drum')[i].addEventListener("click",handleclick);

function handleclick(){
makeSound(this.innerHTML);
buttonAnimation(this.innerHTML);
// alert("I got clicked");
}
}
document.addEventListener('keydown',function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key){

    var audio;
    switch(key)
    {
      case "w": audio=new Audio("sounds/tom-1.mp3");
      audio.play();break;
      case "a": audio=new Audio("sounds/tom-2.mp3");
      audio.play();break;
      case "s": audio=new Audio("sounds/tom-3.mp3");
      audio.play();break;
      case "d": audio=new Audio("sounds/tom-4.mp3");
      audio.play();break;
      case "j": audio=new Audio("sounds/snare.mp3");
      audio.play();break;
      case "k": audio=new Audio("sounds/crash.mp3");
      audio.play();break;
      case "l": audio=new Audio("sounds/kick-bass.mp3");
      audio.play();break;
    }
  //   var audio= new Audio("sounds/tom-1.mp3");
}

 function buttonAnimation(currentKey){
 var active=document.querySelector("." + currentKey);
 active.classList.add("pressed");
 setTimeout(function(){
    active.classList.remove("pressed");
 },100);
 }
