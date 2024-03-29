// pages/ProductDetail.tsx

import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Product from '../types/Product';

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const { productId } = router.query;

  // Fetch product details based on productId
  // This is just a placeholder, you should fetch data from your API
  const product: Product = {
    id: Number(productId),
    name: "Product Name",
    description: "Product Description",
    price: 100,
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-500 mb-2">{product.description}</p>
      <p className="font-bold">Price: ${product.price}</p>
    </Layout>
  );
};

export default ProductDetail;
