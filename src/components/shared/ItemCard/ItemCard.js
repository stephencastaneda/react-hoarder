import React from 'react';

import itemShape from '../../../helpers/propz/itemShape';

import './ItemCard.scss';

class ItemCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;
    return (
      <div className="ItemCard col-3">
        <div className="card">
          <img src={item.itemImage} className="card-img-top" alt={item.itemName} />
            <div className="card-body">
              <h5 className="card-title">{item.itemName}</h5>
                <p className="card-text">{item.itemDescription}</p>
              </div>
           </div>
         </div>
    );
  }
}

export default ItemCard;
