// const h1 = document.getElementById('title')
// const p = document.getElementsByClassName('para')

// const elem = document.querySelectorAll('.para')



const handleSubmit = () => {
    const userData = document.querySelector('.user-data')
    const input = userData.querySelector('input')

    if (input.value) {
         const addedData = document.querySelector('.added-data')
    const p = document.createElement('p')
    p.innerText = input.value
    addedData.appendChild(p)
    } else {
        const errorElem = document.querySelector('.error')
        errorElem.classList.remove('hidden')
        setTimeout(() => {
            errorElem.classList.add('hidden')
        }, 2000)
    }
}

const togglePara = () => {
    const button = document.querySelector('#toggler')
    const para = document.querySelector('.para')

    if (button.innerText.toLowerCase() == 'hide') {
        button.innerText = 'Show'
        para.classList.add('hidden')
    } else {
        button.innerText = 'Hide'
        para.classList.remove('hidden')
    }

    // para.classList.contains('hidden') ? para.classList.remove('hidden') : para.classList.add('hidden')

}