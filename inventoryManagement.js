// Product Inventory Array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Function to log the first product
function logFirstProduct() {
  console.log("First product:", products[0]);
}

// Function to update a product name
function updateProductName(index, newName) {
  if (index >= 0 && index < products.length) {
    products[index] = newName;
    console.log("Updated products:", products);
  } else {
    console.log("Invalid index");
  }
}

// Function to remove the last product
function removeLastProduct() {
  let removedProduct = products.pop();
  console.log("Removed product:", removedProduct);
  console.log("Updated products:", products);
}

// Testing
console.log("Original products:", products);

logFirstProduct();

updateProductName(2, "Wireless Headphones");

removeLastProduct();