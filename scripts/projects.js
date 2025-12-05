document.addEventListener("DOMContentLoaded", () => {
    // Properties
    const synthwave = document.getElementById("synthwaveButt");
    const lytheria = document.getElementById("lytheriaButt");

    // Button navigations
    synthwave.addEventListener("click", () => {
        window.location.href = "projects/Synthwave.html"
    })

    lytheria.addEventListener("click", () => {
        window.location.href = "projects/Lytheria.html"
    })


})