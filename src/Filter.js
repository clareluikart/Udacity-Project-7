import React from 'react';

export default class Filter extends React.Component {

  state = {
    value: this.props.value
  }

  onChange = (event) => {
    this.setState({value: event.target.value})
    this.props.onChange(event.target.value)
  }

  render() {
    return (
        <div className="filter">
          <select value={this.state.value} onChange={this.onChange}>
            <option value="All">All</option>
            <option value="Museums">Museums</option>
            <option value="Restaurants">Restaurants</option>
            <option value="Books">Books</option>
          </select>
        </div>
    );
  }
}
