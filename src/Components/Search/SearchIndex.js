import React, { Component } from "react";
import { Input } from "reactstrap";
class SearchIndex extends React.Component { 
  constructor() {
    super()
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'], filterThings: []
    }
  }

componentDidMount() {
  this.searchFunction()
}

  searchFunction = () => {
    let searchterm = document.getElementById("search").value.toLowerCase()
    if (searchterm === '') {
      this.setState({
        filterThings: this.state.things
      })
    } else {
      let filterResult = this.state.things.filter((things) => {
        if (things.toLowerCase().includes(searchterm)) {
          return things
        }

      })
      this.setState ({
        filterThings: filterResult,

      })
      console.log(this.state.filterThings)
    }}

    render() {
      return (
        <div>
          <Input id="search" onChange={this.searchFunction} />
          <h3>Results:</h3>
          {this.state.filterThings.map((items) => (
            <p> {items} </p>
          ))}
        </div>
      )
    }
  }

export default SearchIndex;