import React, { Component } from 'react'

class Scroll extends Component {
    render(props) {
        console.log(this.props.children);
        return (
            <div style={{overflowY:'scroll', border:'1.5px solid black',height:'600px'  }}>
            {this.props.children}
            </div>
        )
    }
}

export default Scroll
