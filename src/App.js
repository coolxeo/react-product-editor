import React, { Component } from 'react';
import { Button, Icon, Segment } from 'semantic-ui-react';

import productsData from './products-data';

import ProductsBlock from './components/ProductsBlock';
import TextBlock from './components/TextBlock';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      productsData: productsData.products,
      blocks: []
    };
  }
  handleRemoveBlock = (index) => {
    const newBlocks = this.state.blocks.slice();
    newBlocks.splice(index, 1);

    this.setState({ blocks: newBlocks });
  }
  addNewTextBlock = () => {
    this.addNewBlock('text');
  }
  addNewProductsBlock = () => {
    this.addNewBlock('products');
  }
  addNewBlock(type) {
    const newBlocks = this.state.blocks.slice();
    newBlocks.push({ type });

    this.setState({ blocks: newBlocks });
  }
  handleSaveTextBlock = (index, text, description) => {
    const newBlocks = this.state.blocks.slice();
    newBlocks[index].text = text;
    newBlocks[index].description = description;

    this.setState({ blocks: newBlocks });
  }
  handleSaveProductsBlock = (index, products) => {
    const newBlocks = this.state.blocks.slice();
    newBlocks[index].products = products;

    this.setState({ blocks: newBlocks });
  }
  render() {
    return (
      <div>
        {this.state.blocks.map((block, index) => (
          <Segment padded='very' key={index}>
            {block.type === 'products' && (
              <ProductsBlock
                index={index}
                productsData={this.state.productsData}
                onSave={this.handleSaveProductsBlock}
                onRemove={this.handleRemoveBlock}
              />
            )}
            {block.type === 'text' && (
              <TextBlock
                index={index}
                onSave={this.handleSaveTextBlock}
                onRemove={this.handleRemoveBlock}
              />
            )}
          </Segment>
        ))}
        <Segment padded='very'>
          <Button primary onClick={this.addNewProductsBlock}>
            <Icon name='add circle' />
            New Products Block
          </Button>
          <Button primary onClick={this.addNewTextBlock}>
            <Icon name='add circle' />
            New Text Block
          </Button>
        </Segment>
        <Segment padded='very'>
          <h2>Output</h2>
          <pre>{JSON.stringify(this.state.blocks, null, 2)}</pre>
        </Segment>
      </div>
    );
  }
}

export default App;
