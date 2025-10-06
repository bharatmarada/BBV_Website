//Java Script//
const bar = document.getElementById('bar');
const close = document.getElementById('close'); // Correctly identifies the 'X' button
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        // When the 'bar' (hamburger) is clicked, open the menu
        nav.classList.add('active');
    });
}

// FIX: Add a new event listener for the 'close' button
if (close) {
    close.addEventListener('click', () => {
        // When the 'close' ('X') is clicked, remove the 'active' class to close the menu
        nav.classList.remove('active'); // Corrected method is classList.remove()
    });
}

