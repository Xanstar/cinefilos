let currentIndex = 0;

function moveSlide(step) {
    const items = document.querySelectorAll('.tarjeta');
    const totalItems = items.length;
    const carouselInner = document.querySelector('.carousel-inner');

    currentIndex = (currentIndex + step + totalItems) % totalItems;
    const offset = -currentIndex * 100;

    carouselInner.style.transform = `translateX(${offset}%)`;
}

// Ajusta el número de elementos visibles si deseas mostrar varios elementos a la vez
function adjustVisibleItems() {
    const items = document.querySelectorAll('.tarjeta');
    const containerWidth = document.querySelector('.carousel').offsetWidth;
    const itemWidth = items[0].offsetWidth;
    const visibleItems = Math.floor(containerWidth / itemWidth);

    items.forEach(item => {
        item.style.flex = `0 0 ${100 / visibleItems}%`;
    });
}

// Llama a adjustVisibleItems() al cargar y redimensionar la página
window.addEventListener('load', adjustVisibleItems);
window.addEventListener('resize', adjustVisibleItems);
