const content = document.querySelectorAll('.content')

window.addEventListener('scroll', showContent)

showContent()

function showContent() {
    const triggerBottom = window.innerHeight / 5 * 4
    
    content.forEach(content => {
        
        const contentTop = content.getBoundingClientRect().top
        
        if (contentTop < triggerBottom) {
            content.classList.add('show')
        } else {
            content.classList.remove('show')
        }
    })
}