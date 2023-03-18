let divs = document.querySelectorAll('.box > div')
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function () {
        // divs[i].style.flex = '5'
        for (let j = 0; j < divs.length; j++) {
            divs[j].classList.remove('big')
        }
        this.classList.add('big')
    })
}