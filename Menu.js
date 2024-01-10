document.addEventListener('DOMContentLoaded',function(){
    const x=document.querySelector('.x')
    const li=document.querySelectorAll('li')
    x.addEventListener('click',function(){
        x.classList.toggle('active')
        li.forEach(function(element){
            element.classList.toggle('active')
        })
    })
})