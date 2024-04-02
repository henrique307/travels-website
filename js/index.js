

document.querySelector(".mobile-trigger").addEventListener("click", (e) => {
    document.querySelector(".navigation").classList.add("move")
})

document.querySelector(".close").addEventListener("click", (e) => {
    document.querySelector(".navigation").classList.remove("move")
})

document.querySelector(".formulario").addEventListener("submit", (e) => {
    e.preventDefault()

    let error = false
    const inputsObrigatorios = document.querySelectorAll("form div .obrigatorio")

    document.querySelector(".obrigado").classList.add("invisivel")

    inputsObrigatorios.forEach(input => {
        input.style = ``
        input.parentElement.querySelector(".erro").classList.add("invisivel")
    })

    inputsObrigatorios.forEach(input => {
        if(!input.value) {
            input.style = `background-color: rgb(255, 220, 220)`
            input.parentElement.querySelector(".erro").classList.remove("invisivel")
    
            error = true
        }
    })

    if(error) return

    document.querySelector(".obrigado").classList.remove("invisivel")

})

const send = {
    "personalizations": [
        {
            "to": [
                {
                    "email": "john.doe@example.com", "name": "John Doe"
                }
            ],

            "subject": "Hello, World!"
        }
    ],
    "content": [
        {
            "type": "text/plain", "value": "Heya!" 
        }
    ],
    "from": {
        "email": "sam.smith@example.com",
        "name": "Sam Smith"
    },
    "reply_to": {
        "email": "sam.smith@example.com",
        "name": "Sam Smith"
    }
}