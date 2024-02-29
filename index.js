// ALERT

alert ("Please use the latest Chrome to view the page") void;
alert ("Not yet Compatible with other browser") void;


// SKILL ANIMATION //

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".skill-container")[0].classList.add("fadeInLeft")
            document.querySelectorAll(".skill-container")[1].classList.add("fadeInTop")
            document.querySelectorAll(".skill-container")[2].classList.add("fadeInRight")  
        }
    })
})

//observer selector

observer.observe(document.querySelector(".skill-list"));       