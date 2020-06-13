import React from 'react';
import { Link } from 'react-router-dom';

import itemsData from '../../../helpers/data/itemsData';

import './SingleItem.scss';

class SingleItem extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    itemsData.getSingleItem(itemId)
      .then((response) => this.setState({ item: response.data }))
      .catch((err) => console.error('unable to get single item: ', err));
  }

  removeItem = () => {
    const { itemId } = this.props.match.params;
    itemsData.deleteItem(itemId)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('unable to delete item: ', err));
  }

  render() {
    const { item } = this.state;
    const { itemId } = this.props.match.params;
    const editLink = `/edit/${itemId}`;
    return (
      <div className="SingleItem col-10">
        <div className="d-flex flex-wrap justify-content-center">
          <h1>{item.itemName}</h1>
          <div className="card mb-3">
            <img src={item.itemImage} className="card-img-top p-4 border" alt={item.itemName} />
            <p className="card-text m-3">{item.itemDescription}</p>
          </div>
          <Link className="btn btn-warning" to={editLink}><i className="fas fa-pencil-alt"></i></Link>
          <button className="btn btn-danger" onClick={this.removeItem}><i className="fas fa-trash-alt"></i></button>
        </div>
      </div>
    );
  }
}

export default SingleItem;
