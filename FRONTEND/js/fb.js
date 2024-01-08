const products = [
    { name: 'Product 1', brand: 'Brand A' },
    { name: 'Product 2', brand: 'Brand B' },
    { name: 'Product 3', brand: 'Brand A' },
    { name: 'Product 4', brand: 'Brand C' },
    { name: 'Product 5', brand: 'Brand A' },
  ];
  
  function searchByBrand(brand) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';
  
    const filteredProducts = products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
  
    if (filteredProducts.length === 0) {
      resultsContainer.innerHTML = '<p>No results found.</p>';
      return;
    }
  
    const ul = document.createElement('ul');
    filteredProducts.forEach(product => {
      const li = document.createElement('li');
      li.textContent = product.name;
      ul.appendChild(li);
    });
  
    resultsContainer.appendChild(ul);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', function() {
      const brandInput = document.getElementById('brand-input');
      const brand = brandInput.value;
      searchByBrand(brand);
    });
  });
  