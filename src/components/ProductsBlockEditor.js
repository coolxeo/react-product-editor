import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { getProductsFromIds } from '../services/ProductListService';
import ProductList from './ProductList';

class ProductsBlockEditor extends Component {
  render() {
    const processedProductList = getProductsFromIds(this.props.products, this.props.productsData);

    return (
      <Grid columns={2} divided>
        <Grid.Column>
          <h1>Products in Block</h1>
          <ProductList
            products={processedProductList}
            onRemove={this.props.onRemoveProduct}
          />
        </Grid.Column>
        <Grid.Column>
          <h1>All Products</h1>
          <ProductList
            products={this.props.productsData}
            onAdd={this.props.onAddProduct}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default ProductsBlockEditor;
