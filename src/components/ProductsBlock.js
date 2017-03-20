import React, { Component } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';

import ProductsBlockEditor from './ProductsBlockEditor';
import ProductList from './ProductList';

import { getProductsFromIds } from '../services/ProductListService';

class ProductsBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      products: [],
    };
  }
  handleAddProduct = (id) => {
    const newProducts = this.state.products.slice();
    newProducts.push(id);

    this.setState({ products: newProducts });
  }
  handleRemoveProduct = (index) => {
    const newProducts = this.state.products.slice();
    newProducts.splice(index, 1);

    this.setState({ products: newProducts });
  }
  handleSave = () => {
    this.props.onSave(this.props.index, this.state.products);
    this.handleClose();
  }
  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })
  handleRemove = () =>  this.props.onRemove(this.props.index)
  render() {
    const processedProductList = getProductsFromIds(this.state.products, this.props.productsData);

    return (
      <div>
        <h2>Product Block</h2>

        <Modal
          trigger={(
            <Button onClick={this.handleOpen}>
              <Icon name='edit' /> Edit Block
            </Button>
          )}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          size={'big'}
        >
          <Modal.Header>Edit Product Block</Modal.Header>
          <Modal.Content>
            <ProductsBlockEditor
              productsData={this.props.productsData}
              products={this.state.products}
              onAddProduct={this.handleAddProduct}
              onRemoveProduct={this.handleRemoveProduct}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button basic primary onClick={this.handleSave}>
              <Icon name='save' /> Save Block
            </Button>
          </Modal.Actions>
        </Modal>
        <Button onClick={this.handleRemove} color={'red'}>
          <Icon name='remove' /> Remove Block
        </Button>
        
        <ProductList products={processedProductList} />

      </div>
    );
  }
}

export default ProductsBlock;
