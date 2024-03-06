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


const hiddenElements = document.querySelectorAll('.hidden'); // SELECTING ALL HIDDEN CLASS ELEMENTS
hiddenElements.forEach((el) => observer.observe(el)); // OBSERVING ALL HIDDEN ELEMENTS