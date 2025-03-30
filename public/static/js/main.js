document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    const hoverDisplay = document.getElementById('hover-display');
  
    gridItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        const htmlContent = item.getAttribute('data-text'); // Get the pre-parsed HTML
        hoverDisplay.innerHTML = htmlContent; // Inject the HTML into the hover display
        hoverDisplay.classList.add('visible'); // Add the visible class to fade in
      });
  
      item.addEventListener('mouseout', () => {
        hoverDisplay.classList.remove('visible'); // Remove the visible class to fade out
      });
    });
  });