// Select the button and paragraph elements
const toggleBtn = document.querySelector('#toggle-btn');
const lastChange = document.querySelector('#last-change');

// Load the state of the button and the last change message from localStorage
const isDark = localStorage.getItem('isDark') === 'true';
const lastTime = localStorage.getItem('lastTime');

if (isDark) {
  toggleBtn.textContent = 'Turn on';
  document.body.classList.add('dark');
  lastChange.textContent = `Last turning off: ${lastTime}`;
}
else {
  lastChange.textContent = `Last turning on: ${lastTime}`;
}

// Add event listener to the button

toggleBtn.addEventListener('click', () => {
  const lastTime = new Date().toLocaleString();
  let message;
  
  // Toggle the button text and update the message accordingly
  if (toggleBtn.textContent === 'Turn off') {
    toggleBtn.textContent = 'Turn on';
    message = `Last turn off: ${lastTime}`;
    localStorage.setItem('isDark', true);
    
  } else {
    toggleBtn.textContent = 'Turn off';
    message = `Last turn on: ${lastTime}`;
    localStorage.setItem('isDark', false);
  }

  // Toggle the background color
  document.body.classList.toggle('dark');

  // Update the paragraph text
  lastChange.textContent = message;

  //save date to localStorage
  localStorage.setItem('lastTime', lastTime);
});