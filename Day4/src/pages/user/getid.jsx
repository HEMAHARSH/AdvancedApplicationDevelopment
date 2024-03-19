// getId.js
import products from "../../assets/others/products";

const getId = (id) => {
  const product = products.find((product) => product.id === id);

  if (!product) {
    return null;
  }

  return {
    ...product,
    images: product.imgs || [],
  };
};

export default getId;
