// script.js

function adjustLayout() {
    const width = window.innerWidth;

    if (width <= 768) {
        // Add any additional JavaScript-based adjustments for small screens
        document.querySelector('.nav-bar').style.flexDirection = 'column';
        document.querySelector('.nav-items ul').style.flexDirection = 'column';
    } else {
        // Revert to original styles for larger screens
        document.querySelector('.nav-bar').style.flexDirection = 'row';
        document.querySelector('.nav-items ul').style.flexDirection = 'row';
    }
}

// Add event listener for window resize
window.addEventListener('resize', adjustLayout);

// Initial adjustment
adjustLayout();

