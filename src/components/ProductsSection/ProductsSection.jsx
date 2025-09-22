import styles from './ProductsSection.module.css';
import ProductCard from '../ProductCard/ProductCard';
import { useOutletContext } from 'react-router';

const ProductsSection = ({ products }) => {
  const { cartState } = useOutletContext();
  const [cart, setCart] = cartState;

  const handleAddToCart = (e) => {
    const productId = Number(e.target.parentElement.id);

    if (
      cart.some((obj) => {
        return obj.id === productId;
      })
    )
      return;

    const product = products.find((product) => {
      return product.id === productId;
    });
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const productsList = products.map((product) => {
    return (
      <ProductCard
        product={product}
        key={product.id}
        onAddToCart={handleAddToCart}
      />
    );
  });

  return <section className={styles.products}>{productsList}</section>;
};

export default ProductsSection;
