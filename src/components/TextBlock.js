import React, { Component } from 'react';
import { Form, Button, Modal, Icon } from 'semantic-ui-react';

class TextBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      text: this.props.text,
      description: this.props.description,
    };
  }
  handleSave = () => {
    this.props.onSave(this.props.index, this.state.text, this.state.description);
    this.handleClose();
  }
  handleRemove = () =>  this.props.onRemove(this.props.index)
  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })
  onTextChange = (e) => this.setState({ text: e.target.value })
  onDescriptionChange = (e) => this.setState({ description: e.target.value })
  render() {
    return (
      <div>
        <h2>{this.state.text}</h2>
        <p>{this.state.description}</p>
        <Modal
          trigger={(
            <Button onClick={this.handleOpen}>
              <Icon name='edit' /> Edit Block</Button>
            )}
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Modal.Header>Edit Text Block</Modal.Header>
          <Modal.Content>
          <Form>
            <Form.Input value={this.state.text} label='Text' placeholder='Text' onChange={this.onTextChange} />
            <Form.TextArea value={this.state.description} label='Description' placeholder='Description' onChange={this.onDescriptionChange} />
          </Form>
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
      </div>
    );
  }
}

export default TextBlock;
