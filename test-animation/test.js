const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {    // MULTIPLE ENTRIES
        console.log(entry)
        if (entry.isIntersecting) { // CONDITIONAL CHECKING
            entry.target.classList.add('show'); // STOP HERE IF ONE LOOP ONLY
        } else {
            entry.target.classList.remove('show'); // REMOVING THE CLASS SHOW WHEN IS NOT INTERSECTING
        }
    });
});


const animateElements = document.querySelectorAll('.animate'); // SELECTING ALL HIDDEN CLASS ELEMENTS
animateElements.forEach((el) => observer.observe(el)); // OBSERVING ALL HIDDEN ELEMENTS