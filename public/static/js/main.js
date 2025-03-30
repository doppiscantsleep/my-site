document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    const hoverDisplay = document.getElementById('hover-display');
  
    gridItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        const text = item.getAttribute('data-text');
        hoverDisplay.textContent = text;
        hoverDisplay.classList.add('visible'); // Add the visible class to fade in
      });
  
      item.addEventListener('mouseout', () => {
        hoverDisplay.classList.remove('visible'); // Remove the visible class to fade out
      });
    });
  });