import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import Product from './Product';

class ProductList extends Component {
  render() {
    return (
      <Grid columns={2} padded>
        {this.props.products.map((product, index) => (
          <Grid.Column key={index}>
            <Product
              {...product}
              index={index}
              onAdd={this.props.onAdd || null}
              onRemove={this.props.onRemove || null}
            />
          </Grid.Column>
        ))}
      </Grid>
    );
  }
}

export default ProductList;
