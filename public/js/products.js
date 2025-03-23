document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('productsContainer');

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'bg-white p-4 rounded-lg shadow-md';

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover mb-4 rounded-lg">
                    <h2 class="text-xl font-bold mb-2">${product.title}</h2>
                    <p class="text-gray-700 mb-2">${product.description}</p>
                    <p class="text-lg font-semibold mb-2">$${product.price}</p>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Add to Cart</button>
                `;

                productsContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});