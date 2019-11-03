var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");


function SetGradient() {
    console.log(color1.value);
    console.log(color2.value);
    
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", "
    + color2.value
    + ")";

    css.textContent = "Background is rendered by " 
                        + ((color1.value)) 
                        + " and "
                        + ((color2.value));
                    

}

if(color1) {
    color1.addEventListener("input", SetGradient, false);
}

if(color2) {
    color2.addEventListener("input", SetGradient, false);
}