import React from 'react';

import ItemCard from '../../shared/ItemCard/ItemCard';

import authData from '../../../helpers/data/authData';
import itemsData from '../../../helpers/data/itemsData';

import './MyStuff.scss';

class MyStuff extends React.Component {
  state = {
    items: [],
  }

  getItems = () => {
    const uid = authData.getUid();
    itemsData.getItemsByUid(uid)
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('unable to get items: ', err));
  }

  componentDidMount() {
    this.getItems();
  }

  // editEvent = (e) => {
  //   e.preventDefault();
  //   const itemId = 'monkeybutt62';
  //   this.props.history.push(`/edit/${itemId}`);
  // }

  render() {
    const { items } = this.state;
    const buildItemCards = items.map((item) => (
      <ItemCard key={item.id} item={item} />
    ));
    // return (
    //   <div className="MyStuff">
    //   <button className="btn btn-dark" onClick={this.editEvent}>Edit a thing</button>
    //   <Link to='/single/9w8797429384792'>View Single</Link>
    //   <Link to='/new'>New Stuff</Link>
    //     <h1>My Stuff</h1>
    //   </div>
    // );
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <div className="d-flex flex-wrap">
          {buildItemCards}
        </div>
      </div>
    );
  }
}

export default MyStuff;
