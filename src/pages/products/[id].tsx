import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Import the Image component

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: NextPage<ProductDetailProps> = ({ product }) => {
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="bg-darkblue text-peach min-h-screen p-4">
      <div className="container mx-auto">
        <div className="bg-peach p-4 rounded-lg">
          <h1 className="text-3xl font-bold text-darkblue mb-4">{product.title}</h1>
          {/* Replace <img> with <Image> and specify width and height */}
          <Image src={product.image} alt={product.title} width={200} height={20} className="mb-4" />
          <p className="text-darkblue">{product.description}</p>
          {/* Add more product details as needed */}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
   
    const id = context.params ? context.params.id : null;
    if (!id) {
      return { notFound: true };
    }

    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    if (!response.ok) {
      return { notFound: true };
    }

    const product: Product = await response.json();
    return { props: { product } };
  } catch (error) {
    console.error('Error fetching product:', error);
    return { notFound: true };
  }
};

export default ProductDetail;
