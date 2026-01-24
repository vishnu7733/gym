var slides=document.querySelectorAll(".carousel-item");
var nextbtn=document.querySelector(".next-btn");
var prevbtn=document.querySelector(".prev-btn");
var currentIndex=0;

function showslide(index){
    slides.forEach((slide)=>{
            slide.classList.remove("active");

    });
    slides[index].classList.add("active");
};
nextbtn.activeListener("click",function(){
    currentIndex++;
    if(currentIndex>=slides.length){
        currentIndex=0;
    }
    showslide(currentIndex);

});
prevbtn.activeListener("click",function(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=slides.length-1;
    }
    showslide(currentIndex);
});