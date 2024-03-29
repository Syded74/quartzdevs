import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import { Product } from './products/Product';

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    // Fetch the product details from your API and set it to state
    // Replace with actual API call
    if (productId) {
      fetch(`/api/products/${productId}`)
        .then(response => response.json())
        .then(data => setProduct(data as Product)); // Cast the data as Product type
    }
  }, [productId]);

  if (!product) {
    return <Layout>Loading...</Layout>; // Show a loading state or some placeholder content
  }

  return (
    <Layout>
      {/* Render the product details */}
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-500 mb-2">{product.description}</p>
      <p className="font-bold">Price: ${product.price}</p>
    </Layout>
  );
};

export default ProductDetail;
