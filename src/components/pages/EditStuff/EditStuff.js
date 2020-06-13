import React from 'react';

import './EditStuff.scss';

import itemsData from '../../../helpers/data/itemsData';
import authData from '../../../helpers/data/authData';

class EditStuff extends React.Component {
  state = {
    itemDescription: '',
    itemImage: '',
    itemName: '',
  }

  componentDidMount() {
    const editId = this.props.match.params.itemId;
    itemsData.getSingleItem(editId)
      .then((response) => {
        const item = response.data;
        this.setState({
          itemDescription: item.itemDescription,
          itemImage: item.itemImage,
          itemName: item.itemName,
        });
      })
      .catch((err) => console.error('unable to get item to edit: ', err));
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  updateItem = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;
    const {
      itemName,
      itemDescription,
      itemImage,
    } = this.state;
    const updatedItem = {
      itemName,
      itemImage,
      itemDescription,
      uid: authData.getUid(),
    };
    itemsData.putItem(itemId, updatedItem)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('unable to save item: ', err));
  }

  render() {
    const {
      itemName,
      itemDescription,
      itemImage,
    } = this.state;

    return (
    <div className="new col-12">
    <h1>Edit Stuff</h1>
    <form className="col-6 offset-3 text-left">
      <div className="form-group">
        <label htmlFor="item-name">Name</label>
        <input
         type="text"
         className="form-control"
         id="item-name"
         value={itemName}
         onChange={this.nameChange}
        />
        </div>
        <div className="form-group">
        <label htmlFor="item-description">Description</label>
        <input
         type="text"
         className="form-control"
         id="item-description"
         value={itemDescription}
         onChange={this.descriptionChange}
        />
         </div>
        <div className="form-group">
        <label htmlFor="item-image">Image</label>
        <input
         type="text"
         className="form-control"
         id="item-image"
         value={itemImage}
         onChange={this.imageChange}
        />
      </div>
      <button className="btn btn-primary" onClick={this.updateItem}>Update Item</button>
    </form>
  </div>
    );
  }
}

export default EditStuff;
