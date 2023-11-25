
        let bordershow = false
        const img = document.querySelector("img") //querySelector = gets image from the html

        img.addEventListener("click", () => { //=> es lo mismo que function

            if (!bordershow){
                img.style.border = "solid red 2px"
                bordershow = true
            } else {
                img.style.border = "none"
                bordershow = false
            }
        })