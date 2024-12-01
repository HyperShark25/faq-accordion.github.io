const replaceSign = (button) => {
    
    // Replace the image by replacing the source to the other sign
//    let img = button.querySelector("img");
    // console.log(img);
    
    let plus = button.querySelector(".plus");
    let minus = button.querySelector(".minus");

    
    if (plus.style.opacity === "0") {
        plus.style.opacity = "100";
        plus.style.visibility = "visible";

        minus.style.opacity = "0";
        minus.style.visibility = "hidden";

    } else {
        plus.style.opacity = "0";
        plus.style.visibility = "hidden";

        minus.style.opacity = "100";
        minus.style.visibility = "visible";
    }
    
    
    // Get Plus and Minus Sign from the document
//    console.log(plus);

    
//    console.log(minus);
    
    // Remove Plus Sign
/*    plus.style.opacity = "0";
    plus.style.visibility = "hidden";
*/ 
    
    // Add the Minus Sign
/*    minus.style.opacity = "100";
    minus.style.visibility = "visible";
*/
}


/*
const showAnswer = () => {
    let hide = document.getElementsByClassName("hide");

    show.style.opacity = "0";
    show.style.visibility = "hidden";
}
*/