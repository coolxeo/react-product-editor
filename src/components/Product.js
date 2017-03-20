import React, { Component } from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';

class Product extends Component {
  constructor(props) {
    super(props);
  }
  onAdd = () => {
    this.props.onAdd(this.props.id);
  }
  onRemove = () => {
    this.props.onRemove(this.props.index);
  }
  render() {
    const { image, title, price, retailer } = this.props;

    let extra = null;
    if(this.props.onAdd) {
      extra = (
        <Button fluid primary onClick={this.onAdd}>
          <Icon name='add circle' />
          Add to Block
        </Button>
      );
    }

    if(this.props.onRemove) {
      extra = (
        <Button fluid color='red' onClick={this.onRemove}>
          <Icon name='remove' />
          Remove from Block
        </Button>
      );
    }

    return (
      <Card
        image={image}
        header={title}
        meta={`£${price}`}
        description={retailer}
        extra={extra}
      />
    );
  }
}

export default Product;
