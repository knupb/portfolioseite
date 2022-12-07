    const relevantIds = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth']
    const elements = []
    for (let id of relevantIds) {
        const element = document.getElementById(id)
        elements.push(element)
    }
    const h2elements = document.querySelectorAll('h2.inner')
    console.log(h2elements)
    for (let i = 0; i < h2elements.length; i++) {
        const relevantId = relevantIds[i]
        const element = h2elements[i]
        element.relevantId = relevantId
        element.addEventListener('click', () => {
            element.classList.toggle('active')
            h2elements.forEach(el => {
                if (el !== element) {
                    el.classList.remove('active')
                }
            })
            const radioButton = document.getElementById(relevantId)
            radioButton.checked = !radioButton.checked
            relevantIds.filter(el => el !== relevantId).forEach(el => {
                document.getElementById(el).checked = false
            })
        })
    }