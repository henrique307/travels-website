document.querySelector(".mobile-trigger").addEventListener("click", (e) => {
    document.querySelector(".navigation").classList.add("move")
})

document.querySelector(".close").addEventListener("click", (e) => {
    document.querySelector(".navigation").classList.remove("move")
})