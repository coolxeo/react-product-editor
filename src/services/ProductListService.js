function getProductsFromIds(idsArray, productsData) {
  return idsArray.map((productId) => (
    productsData.filter(product => product.id === productId)[0]
  ));
};

export { getProductsFromIds };
