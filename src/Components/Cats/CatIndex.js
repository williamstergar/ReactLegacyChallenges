// THIS IS A CHILD COMPONENT OF CATS.JS

import React, { Component } from 'react'
import CatList from './CatList'

class CatIndex extends Component {
  constructor(props) {
    super(props) // only necessary if passing props into the file you type "super props" and is specifically for class components
    this.state = {
      breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
    }
  }

  render() {
    return (
      <div>
        <CatList cats={this.state.breeds} /> 
      </div>
    );
  }
}

export default CatIndex