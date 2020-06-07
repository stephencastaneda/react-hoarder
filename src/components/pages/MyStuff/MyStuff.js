import React from 'react';

import { Link } from 'react-router-dom';


import './MyStuff.scss';

class MyStuff extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const itemId = 'monkeybutt62';
    this.props.history.push(`/edit/${itemId}`);
  }

  render() {
    return (
      <div className="MyStuff">
      <button className="btn btn-dark" onClick={this.editEvent}>Edit a thing</button>
      <Link to='/single/9w8797429384792'>View Single</Link>
      <Link to='/new'>New Stuff</Link>
        <h1>My Stuff</h1>
      </div>
    );
  }
}

export default MyStuff;
