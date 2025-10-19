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



// Function to handle video playback across the gallery in blog page2
function setupSinglePlayVideoGallery() {
    // 1. Select all video elements in the gallery
    const videos = document.querySelectorAll('.video-gallery video');

    // 2. Add an event listener to each video
    videos.forEach(currentVideo => {
        // We listen for the 'play' event
        currentVideo.addEventListener('play', () => {
            // 3. Loop through ALL videos again
            videos.forEach(otherVideo => {
                // 4. If the video in the loop is NOT the one that just started playing...
                if (otherVideo !== currentVideo) {
                    // 5. ...pause it
                    otherVideo.pause();
                }
            });
        });
    });
}

// Run the setup function once the page content is loaded
document.addEventListener('DOMContentLoaded', setupSinglePlayVideoGallery);


// Contact details Js//
// function submiEmail(){
//     emailjs.init({
//   publicKey: '6jUqV0rXUeEKsy6SN',
// });

// const name = document.getElementById('full-name').ariaValueMax.trim();
// const age = document.getElementById('age').ariaValueMax.trim();
// const location = document.getElementById('location').ariaValueMax.trim();
// const emailAdd = document.getElementById('email').ariaValueMax.trim();
// const phoneNo = document.getElementById('phone').ariaValueMax.trim();
// const collabIdea = document.getElementById('message');

// const params = {
//     from_name: name,
//     from_age: age,
//     from_location: location,
//     from_email: emailAdd,
//     from_phnNo: phoneNo,
//     from_collab: collabIdea,
// };

// // emailjs.send('service id', 'template id', params);
// emailjs.send('service_33xbmxb', 'template_11ca3ks', params)
// .then(function()
// {
//     alert("Email Sent!");
// })
// .catch(function()
// {
//     alert("Failed to send");
// })

// }


// Contact details Js//
// Pass the event (e or event) to prevent the form from submitting normally
function submiEmail(event){
    // CRITICAL FIX 2: Stop the default form submission (page reload)
    event.preventDefault(); 
    
    // Initialize Email.js
    emailjs.init({
        publicKey: '6jUqV0rXUeEKsy6SN',
    });

    // CRITICAL FIX 1: Use the correct '.value.trim()' to get the input data
    const name = document.getElementById('full-name').value.trim();
    const age = document.getElementById('age').value.trim();
    const location = document.getElementById('location').value.trim();
    const emailAdd = document.getElementById('email').value.trim();
    const phoneNo = document.getElementById('phone').value.trim();
    const collabIdea = document.getElementById('message').value.trim(); // Also corrected for textarea

    // Check if any critical field is empty (optional, but good practice)
    if (!name || !age || !location || !emailAdd || !phoneNo) {
        alert("Please fill out all required fields.");
        return; // Stop the function if fields are empty
    }

    const params = {
        from_name: name,
        from_age: age,
        from_location: location,
        from_email: emailAdd,
        from_phnNo: phoneNo,
        from_collab: collabIdea,
    };

    // Send the email
    emailjs.send('service_33xbmxb', 'template_11ca3ks', params)
    .then(function()
    {
        alert("Email Sent successfully! Bharat will be in touch soon.");
        // Optional: Reset the form after success
        document.querySelector('.collab-form').reset();
    })
    .catch(function(error)
    {
        // Display the actual error for debugging
        alert("Failed to send email. Error: " + JSON.stringify(error));
    });
}

