// script.js


gsap.to(".Lc_icon", {
    delay: 0.2,
    opacity: 1,
    duration: 1,
    x: 400,
});
gsap.from(".left-content h1" , {

    delay: 0.2,
    opacity: 0,
    duration: 1,
    x: 400,
})
gsap.from(".left-content h4 ", {

    delay: 0.1,
    opacity: 0,
    duration: 2,
    y:30,
    

})
gsap.registerPlugin(ScrollTrigger);

gsap.from(".health_tip", {
    duration: 1, 
    opacity: 0, 
    y: 50, 
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".health_tip", 
        start: "top 100%", 
        toggleActions: "play none none none",
    }
});


// function adjustLayout() {
//     const width = window.innerWidth;

//     if (width <= 768) {
//         // Add any additional JavaScript-based adjustments for small screens
//         document.querySelector('.nav-bar').style.flexDirection = 'column';
//         document.querySelector('.nav-items ul').style.flexDirection = 'column';
//     } else {
//         // Revert to original styles for larger screens
//         document.querySelector('.nav-bar').style.flexDirection = 'row';
//         document.querySelector('.nav-items ul').style.flexDirection = 'row';
//     }
// }

// /
// window.addEventListener('resize', adjustLayout);

// // Initial adjustment
// adjustLayout();

