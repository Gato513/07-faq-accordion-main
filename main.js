const accordionButton = document.querySelectorAll('.accordion-button')

const nodeContents = [
    "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript.It's suitable for all levels and ideal for portfolio building.",
    "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
]

const deployContent = (selectedContent, idx) => {
    const newElement = document.createElement('p')
    const newTextNode = document.createTextNode(nodeContents[idx])
    newElement.appendChild(newTextNode)
    selectedContent.appendChild(newElement)
}

const collapseContent = (selectedContent) => {
    const elementToDelete = selectedContent.children[1]
    selectedContent.removeChild(elementToDelete)
}

accordionButton.forEach((button, idx) => {

    button.addEventListener("click", function () {
        const { src } = button.querySelector('img')
        const selectedContent = button.closest('.sections-cuestion')
        const itCollapsed = src.includes("icon-plus.svg")

        if (itCollapsed) {
            button.querySelector('img').src = "assets/images/icon-minus.svg"
            deployContent(selectedContent, idx)
        }
        else {
            button.querySelector('img').src = "assets/images/icon-plus.svg"
            collapseContent(selectedContent)
        }
    });
})
