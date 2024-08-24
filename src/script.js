const btn = document.querySelectorAll('.faqContentMain button');

btn.forEach(button => {
    button.addEventListener('click', ()=>{
        const faqContentMain = button.closest('.faqContentMain');
        const faqContentMainSecond = faqContentMain.querySelector('.faqContentMain-second');
        if (faqContentMainSecond.style.display === 'none' || faqContentMainSecond.style.display === '') {
            faqContentMainSecond.style.display = 'block';
            console.log(faqContentMainSecond.style.display);
        } else {
            faqContentMainSecond.style.display = 'none';
        }
    })
});