// console.log("finquacisiamo");
// trovare tutti gli elementi con class .slide
let slides = document.getElementsByClassName("slide");

let iaa;
//iterare su tuttte le slide (creare un ciclo)

function prox() {
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        console.log(slide, i);

        //per ogni slide ccontrolliam o se ha la classe .active
        if (slide.classList.contains("active")) {
            // se si,rimuovo la clasee4 active
            slide.classList.remove("active");
            iaa = i;
            console.log("ho rimosso", i)
            //  e prendo nota dell indice

        }
    }

    if (iaa + 1 == slides.length) {
        slides[0].classList.add("active")
    }
    else {
        slides[iaa + 1].classList.add("active");
    }
}

console.log("l'immagine attiuva era", iaa);