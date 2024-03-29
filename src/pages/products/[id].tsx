import { GetServerSideProps, NextPage } from 'next';

// Define the expected shape of a product.
interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
}

// Define props for the ProductDetail component.
interface ProductDetailProps {
  product: Product | null;
}

const ProductDetail: NextPage<ProductDetailProps> = ({ product }) => {
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
    </div>
  );
};

// TypeScript type for context received by getServerSideProps
interface ContextType {
  params: {
    id: string; // This corresponds to the file name [id].tsx, so it's expected to be a string.
  };
}

export const getServerSideProps: GetServerSideProps = async (context: ContextType) => {
  const { id } = context.params;
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    if (!response.ok) {
      return { props: { product: null } };
    }
    const product: Product = await response.json();
    return { props: { product } };
  } catch (error) {
    console.error('Error fetching product:', error);
    return { props: { product: null } };
  }
};

export default ProductDetail;
