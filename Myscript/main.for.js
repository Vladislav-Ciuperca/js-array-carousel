
let slides = document.getElementsByClassName("slide");
let thumbs = document.getElementsByClassName("thumb");

let iaa;
let taa;


function prox() {
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        console.log(slide, i);

        if (slide.classList.contains("active")) {
            slide.classList.remove("active");
            iaa = i;
            console.log("ho rimosso", i)

        }
    }
    if (iaa + 1 == slides.length) {
        slides[0].classList.add("active")
    }
    else {
        slides[iaa + 1].classList.add("active");
    }
    /***************************** thumbns **************************/

    for (let z = 0; z < thumbs.length; z++) {
        const thumb = thumbs[z];
        console.log(thumb, z);
        if (thumb.classList.contains("seen")) {
            thumb.classList.remove("seen");
            taa = z;
            console.log("ho rimosso", z)

        }
    }
    if (taa + 1 == thumbs.length) {
        thumbs[0].classList.add("seen")
    }
    else {
        thumbs[iaa + 1].classList.add("seen");
    }
}

function prec() {
    for (let i = 0; i < slides.length; i++) {
        slide = slides[i];
        console.log(slide, i);

        //per ogni slide ccontrolliamo se ha la classe .active
        if (slide.classList.contains("active")) {
            // se si,rimuovo la clasee4 active
            slide.classList.remove("active");
            iaa = i;
            console.log("ho rimosso", i)
            //  e prendo nota dell indice

        }
    }

    if (iaa == 0) {
        slides[slides.length - 1].classList.add("active")
    }
    else {
        slides[iaa - 1].classList.add("active");
    }
    /************************************ thumbs **************************************/
    for (let z = 0; z < thumbs.length; z++) {
        const thumb = thumbs[z];
        console.log(thumb, z);
        if (thumb.classList.contains("seen")) {
            thumb.classList.remove("seen");
            taa = z;
            console.log("ho rimosso", z)

        }
    }
    if (taa == 0) {
        thumbs[thumbs.length - 1].classList.add("seen")
    }
    else {
        thumbs[iaa - 1].classList.add("seen");
    }
}

console.log("l'immagine attiuva era", iaa);