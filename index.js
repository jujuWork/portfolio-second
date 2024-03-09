//alert('Please use the latest google chrome browser');
//alert('Browser compatability issue');


// SCROLL ANIMATION X

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


const animateXElements = document.querySelectorAll('.animateX'); // SELECTING ALL HIDDEN CLASS ELEMENTS
animateXElements.forEach((el) => observer.observe(el)); // OBSERVING ALL HIDDEN ELEMENTS

const animateYElements = document.querySelectorAll('.animateY'); 
animateYElements.forEach((el) => observer.observe(el));

const animateZElements = document.querySelectorAll('.animateZ'); 
animateZElements.forEach((el) => observer.observe(el));