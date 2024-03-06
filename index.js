alert('Please use the latest google chrome browser');
alert('Browser compatability issue');


// SCROLL ANIMATION

const observer = new IntersectionObserver((entries) => {
    entries.forEach ((entry) => { // checking of multiple entry
        console.log(entry) //condition check
        if (entry.isIntersecting) { //  checking if its intersecting the viewport or not
            entry.target.classList.add('show'); //if tis intersecting will add a class show, if only once animated you can stop here!!
        } else {
            entry.target.classList.remove('show'); // removing the animation if is intersecting
            }
    });
});


const skillContainerElements = document.querySelectorAll('.skillContainer'); // selecting all the classlist to be animated
skillContainerElements.forEach((el) => observer.observe(el));