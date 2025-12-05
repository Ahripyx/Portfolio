document.addEventListener("DOMContentLoaded", () => {
    // Properties
    const synthwave = document.getElementById("synthwaveButt");
    const lytheria = document.getElementById("lytheriaButt");
    const abyssal = document.getElementById("abyssalButt");

    // Button navigations
    synthwave.addEventListener("click", () => {
        window.location.href = "projects/Synthwave.html"
    })

    lytheria.addEventListener("click", () => {
        window.location.href = "projects/Lytheria.html"
    })

    abyssal.addEventListener("click", () => {
        window.location.href = "projects/Abyssal.html"
    })


})