import React from 'react';

import authData from '../../../helpers/data/authData';

import './New.scss';
import itemsData from '../../../helpers/data/itemsData';

class New extends React.Component {
  state = {
    itemDescription: '',
    itemImage: '',
    itemName: '',
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

  saveItem = (e) => {
    e.preventDefault();
    const {
      itemName,
      itemDescription,
      itemImage,
    } = this.state;

    const newItem = {
      itemName,
      itemImage,
      itemDescription,
      uid: authData.getUid(),
    };
    itemsData.postItem(newItem)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('unable to save item: ', err));
  }

  render() {
    const {
      itemDescription,
      itemImage,
      itemName,
    } = this.state;

    return (
      <div className="new col-12">
        <h1>New Stuff</h1>
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
          <button className="btn btn-primary" onClick={this.saveItem}>Save Image</button>
        </form>
      </div>
    );
  }
}

export default New;
