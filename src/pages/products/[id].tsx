/// Imports the useRouter hook from Next.js for routing functionalities

import { useRouter } from 'next/router';

const ProductDetail = ({ product }) => {
 
  return (
    <div className="bg-darkblue text-peach min-h-screen p-4">
      <div className="container mx-auto">
        <div className="bg-peach p-4 rounded-lg">
          <h1 className="text-3xl font-bold text-darkblue mb-4">{product.title}</h1>
          <img src={product.image} alt={product.title} className="mb-4"/>
          <p className="text-darkblue">{product.description}</p>
          // Add more product details as needed
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  // placed API call here to fetch the product by ID
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}

export default ProductDetail;
