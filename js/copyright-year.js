const copyElement = document.querySelector('#site-copyright-year');

// Get the current year
const currentYear = new Date().getFullYear();

// Set the copy element's innerHTML to the current year
copyElement.innerHTML = currentYear;