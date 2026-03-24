// Product Inventory Array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Log the first product
function logFirstProduct() {
  console.log(products[0]);
}

// Update product name at a given index
function updateProductName(index, newName) {
  products[index] = newName;
}

// Remove the last product
function removeLastProduct() {
  products.pop();
}

// Add a new product
function addProduct(newProduct) {
  products.push(newProduct);
}

// Export functions for testing (IMPORTANT)
module.exports = {
  products,
  logFirstProduct,
  updateProductName,
  removeLastProduct,
  addProduct
};