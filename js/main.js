let sliderImages = document.querySelectorAll(".slide"),
arrowLeft  = document.querySelector("#arrow-left"),
arrowRight  = document.querySelector("#arrow-right"),
current = 0

// Clear All Images
function reset() {
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = "none"
    }
}

// The SliderStart
function startSlider () {
    reset()
    sliderImages[0].style.display ="block"
}

// Show Previous Image
function sliderLeft(){
    reset()
    sliderImages[current - 1].style.display = "block"
    current--
}

// Show Next Image
function sliderRight(){
    reset()
    sliderImages[current + 1].style.display = "block"
    current++
}

// Left Arrow Click 
arrowLeft.addEventListener("click", function(){
    console.log("button Clicked ")
    if(current === 0){
        current = sliderImages.length
    }

    sliderLeft()
})
// Right Arrow Click 
arrowRight.addEventListener("click", function(){
    console.log("button Clicked ")
    if(current === sliderImages.length - 1){
        current = -1
    }

    sliderRight()
})


startSlider()