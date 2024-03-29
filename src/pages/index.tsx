// pages/index.tsx

import { GetStaticProps } from 'next';

export default function Home({ products }) {
  return (
    <div className="bg-darkblue text-peach min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gold mb-6">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products && products.map(product => (
            <a href={`/products/${product.id}`} key={product.id} className="p-4 border border-gold rounded-lg hover:bg-gold hover:text-darkblue transition-colors">
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="text-md">{`$${product.price}`}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Fetch the products
  const res = await fetch('https://api.escuelajs.co/api/v1/products');
  const products = await res.json();

  // Return the products as props
  return {
    props: {
      products,
    },
  };
};
