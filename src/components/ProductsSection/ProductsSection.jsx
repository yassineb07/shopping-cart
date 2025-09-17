import styles from './ProductsSection.module.css';
import ProductCard from '../ProductCard/ProductCard';

const ProductsSection = ({ products }) => {
  const productsList = products.map((product) => {
    return <ProductCard product={product} />;
  });
  return <section className={styles.products}>{productsList}</section>;
};

export default ProductsSection;
