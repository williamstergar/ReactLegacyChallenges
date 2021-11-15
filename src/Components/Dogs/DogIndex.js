// THIS IS THE CHILD COMPONENT OF DOGS.JS

import React, {Component} from 'react'
// import React, {useState,useEffect} from 'react'

export default class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ''
        }
    }

    // componentDidMount() {
    //     console.log('Component Mounted')

    dogPicture() {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data =>
            (this.setState({
                img: data.message
            })))
        .catch(err => this.catchError(err))
            console.log(this.state)
    }

    catchError(err) {
        return (
            <div>
                <h1> Error pulling new dog image </h1>
                <p> {err} </p>
            </div>
        )
    }

    render() {
        return (
            <div>
            <h2> Random Dog Image </h2>
            {/* <Dogs url={this.state.img} /> */}
            <button onClick={ () => this.dogPicture()}> Random Dog </button>
            <img src={this.state.img}/>
            </div>
        )
    }
}