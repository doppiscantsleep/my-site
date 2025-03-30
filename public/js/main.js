document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            
            // Remove active class from all items
            gridItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // You can add more interactions here
            console.log(`Selected category: ${category}`);
        });
    });
});