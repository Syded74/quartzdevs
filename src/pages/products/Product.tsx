import { NextPage } from 'next';

// Reusing your existing Product interface
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

// Example product data
const exampleProduct: Product = {
  id: 1,
  name: 'Example Product',
  description: 'This is an example description.',
  price: 100,
};

// Define a React component that uses the Product interface
const ProductPage: NextPage = () => {
  return (
    <div>
      <h1>{exampleProduct.name}</h1>
      <p>{exampleProduct.description}</p>
      <p>${exampleProduct.price}</p>
    </div>
  );
};

export default ProductPage;
