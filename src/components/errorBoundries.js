import React, { Component } from 'react'

export class errorBoundries extends Component {
constructor (props){
    super(props)
    this.state={
        hasError: false
    }
}
componentDidCatch(error, info){
    this.setState({hasError: true})

}

    render() {
        if(this.state.hasError) {
        return (
            <div>
                <h1>ooops an Error occured </h1>
            </div>
        )
        }
        return (
            <div>{this.props.children}</div>
        )
    }
}

export default errorBoundries
