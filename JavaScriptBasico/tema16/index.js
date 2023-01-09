const paragraphs = document.querySelectorAll(".paragraph")
const sections = document.querySelectorAll(".section")

paragraphs.forEach(paragraph => {
    paragraph.addEventListener("dragstart", event => {
        paragraph.classList.add("dragging")
        event.dataTransfer.setData("id", paragraph.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    paragraph.addEventListener("dragend", () => {
        paragraph.classList.remove("dragging")
    })
})

sections.forEach(section => {
    section.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
    })

    section.addEventListener("drop", event => {
        const id_paragraph = event.dataTransfer.getData("id")
        const paragraph = document.getElementById(id_paragraph)
        section.appendChild(paragraph)
    })
})

const papelera = document.querySelector(".trash")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "link"
})

papelera.addEventListener("drop", event => {
    const id_paragraph = event.dataTransfer.getData("id")
    document.getElementById(id_paragraph).remove()
})