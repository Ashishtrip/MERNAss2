const hobbyInput = document.getElementById('hobby-input');
const addHobbyBtn = document.getElementById('add-hobby-btn');
const hobbyList = document.getElementById('hobby-list');
// Function to add a new hobby benefit
function addHobbyBenefit() {
    const inputValue = hobbyInput.value.trim();
    if (inputValue === '') {
        alert('Please enter a benefit before adding!');
        return;
    }
    // Create new list item
    const newLi = document.createElement('li');
    newLi.innerHTML = `<span><strong>New Benefit:</strong> ${inputValue}</span> <button class="delete-btn">Delete</button>`;
    // Add to list
    hobbyList.appendChild(newLi);
    // Clear input
    hobbyInput.value = '';
}
// Add event listener to the Add button
addHobbyBtn.addEventListener('click', addHobbyBenefit);
// Add Enter key support for adding hobby
hobbyInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addHobbyBenefit();
    }
});
// Event delegation for delete buttons - handles both existing and new items
hobbyList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const li = e.target.parentElement;
        hobbyList.removeChild(li);
    }
});
// Contact Form Interactivity
const contactForm = document.querySelector('.cont-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('msg').value;
    // Display confirmation alert
    alert(`Thank you, ${name}! Your message has been submitted successfully.\n\nWe will contact you at ${email} soon.`);
    // Reset the form
    contactForm.reset();
});
// Dynamic Footer - Date and Time
const dateTimeDisplay = document.getElementById('datetime');
function updateDateTime() {
    const now = new Date();
    // Get day name
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[now.getDay()];
    // Get date components
    const day = String(now.getDate()).padStart(2, '0');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = monthNames[now.getMonth()];
    const year = now.getFullYear();
    // Get time components
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    // Format: day, dd month yyyy, HH:mm:ss
    const formattedDateTime = `${dayName}, ${day} ${monthName} ${year}, ${hours}:${minutes}:${seconds}`;
    dateTimeDisplay.textContent = formattedDateTime;
}
// Update immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);