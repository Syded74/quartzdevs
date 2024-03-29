// Exports the function 'getProducts', making it available for import in other files.

export async function getProducts() {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  }
  