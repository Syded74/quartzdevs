// index.tsx
import { GetStaticProps } from 'next';

// Defines the shape of a product for TypeScript, if your products follow a different structure,
// adjust the fields accordingly.
interface Product {
  id: number;
  title: string;
  price: number;
}

// The Home component, which expects an array of products as props.
interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
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
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    if (!response.ok) {
      // Handle the case where the response status is not OK.
      throw new Error(`Failed to fetch products, status: ${response.status}`);
    }
    const products: Product[] = await response.json();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    // Handle any errors in fetching data
    console.error('Error fetching products:', error);
    return {
      props: {
        products: [],
      },
    };
  }
};
