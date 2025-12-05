document.addEventListener("DOMContentLoaded", () => {
    // Properties
    const synthwave = document.getElementById("synthwaveButt");
    const lytheria = document.getElementById("lytheriaButt");
    const abyssal = document.getElementById("abyssalButt");
    const haver = document.getElementById("haverButt");
    const calorieTracker = document.getElementById("calorieButt");
    const questify = document.getElementById("questifyButt");

    // Button navigations
    synthwave.addEventListener("click", () => {
        window.location.href = "projects/synthwave.html"
    })

    lytheria.addEventListener("click", () => {
        window.location.href = "projects/lytheria.html"
    })

    abyssal.addEventListener("click", () => {
        window.location.href = "projects/abyssal.html"
    })

    haver.addEventListener("click", () => {
        window.location.href = "projects/haver.html"
    })

    calorieTracker.addEventListener("click", () => {
        window.location.href = "projects/track-a-cal.html"
    })

    questify.addEventListener("click", () => {
        window.location.href = "projects/questify.html"
    })


})